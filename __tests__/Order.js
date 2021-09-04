import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import Vuetify from 'vuetify'
import Order from '@/pages/order.vue'
import state from '@/store/state.js'
import getters from '@/store/getters.js'
import mutations from '@/store/mutations.js'
import ResponseSnackbar from '@/components/ResponseSnackbar.vue'
import QuantityField from '@/components/QuantityField.vue'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.component('ResponseSnackbar', ResponseSnackbar)
Vue.component('QuantityField', QuantityField)
Vue.component('NuxtLink', { template: '<span></span>' })

function createOrder() {
  const wrapper = mount(Order, {
    store: new Store({
      state,
      getters,
      mutations,
    }),
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
})
