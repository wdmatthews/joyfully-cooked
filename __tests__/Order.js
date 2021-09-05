import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex, { Store } from 'vuex'
import Vuetify from 'vuetify'
import Order from '@/pages/order.vue'
import state from '@/store/state.js'
import getters from '@/store/getters.js'
import mutations from '@/store/mutations.js'
import ResponseSnackbar from '@/components/ResponseSnackbar.vue'
import QuantityField from '@/components/QuantityField.vue'
import OrderFavoriteDialog from '@/components/OrderFavoriteDialog.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.component('ResponseSnackbar', ResponseSnackbar)
Vue.component('QuantityField', QuantityField)
Vue.component('OrderFavoriteDialog', OrderFavoriteDialog)
Vue.component('NuxtLink', { template: '<span></span>' })

function createOrder() {
  const wrapper = mount(Order, {
    store: new Store({
      state,
      getters,
      mutations,
    }),
    router: new VueRouter(),
    vuetify: new Vuetify(),
  })
  return { wrapper, vm: wrapper.vm }
}

describe('Order', () => {
  test('sets item quantity in order', () => {
    const { vm } = createOrder()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.items = [{ id: '1', quantity: 1, image: 'waffle.png' }]
    vm.setItemQuantity(0, 2)
    
    expect(vm.$store.state.items[0].quantity).toBe(2)
  })
  
  test('removes item from order', () => {
    const { vm } = createOrder()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.items = [{ id: '1', quantity: 1, image: 'waffle.png' }]
    vm.removeItem(0)
    
    expect(vm.$store.state.items.length).toBe(0)
  })
  
  test('removes all items from order', () => {
    const { vm } = createOrder()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.$store.commit('addItemToOrder', { item: { id: '2' }, quantity: 1 })
    vm.items = [
      { id: '1', quantity: 1, image: 'waffle.png' },
      { id: '2', quantity: 1, image: 'waffle.png' },
    ]
    vm.removeAllItems()
    
    expect(vm.$store.state.items.length).toBe(0)
  })
  
  test('purchases order and removes all items from order', () => {
    const { vm } = createOrder()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.$store.commit('addItemToOrder', { item: { id: '2' }, quantity: 1 })
    vm.items = [
      { id: '1', quantity: 1, image: 'waffle.png' },
      { id: '2', quantity: 1, image: 'waffle.png' },
    ]
    vm.purchaseOrder()
    
    expect(vm.$store.state.items.length).toBe(0)
  })
  
  test('adds favorite order', () => {
    const { vm } = createOrder()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.$store.commit('addItemToOrder', { item: { id: '2' }, quantity: 1 })
    vm.items = [
      { id: '1', quantity: 1, image: 'waffle.png' },
      { id: '2', quantity: 1, image: 'waffle.png' },
    ]
    vm.favoriteOrderName = 'Favorite Order'
    vm.addOrderToFavorites()
    
    expect(vm.favoriteOrders.length).toBe(1)
  })
  
  test('overwrites favorite order', () => {
    const { vm } = createOrder()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.$store.commit('addItemToOrder', { item: { id: '2' }, quantity: 1 })
    vm.items = [
      { id: '1', quantity: 1, image: 'waffle.png' },
      { id: '2', quantity: 1, image: 'waffle.png' },
    ]
    vm.favoriteOrderName = 'Favorite Order'
    vm.addOrderToFavorites()
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.items = [
      { id: '1', quantity: 1, image: 'waffle.png' },
      { id: '2', quantity: 2, image: 'waffle.png' },
    ]
    vm.addOrderToFavorites()
    
    expect(vm.favoriteOrders[0].items[1].quantity).toBe(2)
  })
  
  test('removes favorite order', () => {
    const { vm } = createOrder()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.$store.commit('addItemToOrder', { item: { id: '2' }, quantity: 1 })
    vm.items = [
      { id: '1', quantity: 1, image: 'waffle.png' },
      { id: '2', quantity: 1, image: 'waffle.png' },
    ]
    vm.favoriteOrderName = 'Favorite Order'
    vm.addOrderToFavorites()
    vm.removeFavoriteOrder(0)
    
    expect(vm.favoriteOrders.length).toBe(0)
  })
  
  test('loads favorite order', () => {
    const { vm } = createOrder()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.$store.commit('addItemToOrder', { item: { id: '2' }, quantity: 1 })
    vm.items = [
      { id: '1', quantity: 1, image: 'waffle.png' },
      { id: '2', quantity: 1, image: 'waffle.png' },
    ]
    vm.favoriteOrderName = 'Favorite Order'
    vm.addOrderToFavorites()
    vm.removeAllItems()
    
    expect(vm.items.length).toBe(0)
    
    vm.shownFavoriteOrder = vm.favoriteOrders[0]
    vm.loadShownFavoriteOrder()
    
    expect(vm.favoriteOrders.length).toBe(1)
    expect(vm.items.length).toBe(2)
  })
})
