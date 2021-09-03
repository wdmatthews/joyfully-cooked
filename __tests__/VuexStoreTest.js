import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import EmptyComponent from '@/components/EmptyComponent.js'
import state from '@/store/state.js'
import getters from '@/store/getters.js'
import mutations from '@/store/mutations.js'

Vue.use(Vuex)
Vue.component('EmptyComponent', EmptyComponent)

function createEmptyComponent() {
  const wrapper = mount(EmptyComponent, {
    store: new Store({
      state,
      getters,
      mutations,
    }),
  })
  return { wrapper, vm: wrapper.vm }
}

describe('VuexStore', () => {
  test('has 1 item after loading 1 item', () => {
    const { vm } = createEmptyComponent()
    const items = [{ id: '1', quantity: 1 }]
    
    vm.$store.commit('loadItems', items)
    
    expect(vm.$store.state.items).toBe(items)
  })
  
  test('has 1 item after adding item with 0 items', () => {
    const { vm } = createEmptyComponent()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    
    expect(vm.$store.state.items.length).toBe(1)
  })
  
  test('has 1 modified item after adding item with 1 item', () => {
    const { vm } = createEmptyComponent()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 2 })
    
    expect(vm.$store.state.items[0].quantity).toBe(3)
  })
  
  test('has 1 item with 2 quantity after setting item quantity to 2', () => {
    const { vm } = createEmptyComponent()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.$store.commit('setItemQuantity', { index: 0, quantity: 2 })
    
    expect(vm.$store.state.items[0].quantity).toBe(2)
  })
  
  test('has no items after removing 1 added item', () => {
    const { vm } = createEmptyComponent()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.$store.commit('removeItem', 0)
    
    expect(vm.$store.state.items.length).toBe(0)
  })
  
  test('has no items after removing all added items', () => {
    const { vm } = createEmptyComponent()
    
    vm.$store.commit('addItemToOrder', { item: { id: '1' }, quantity: 1 })
    vm.$store.commit('addItemToOrder', { item: { id: '2' }, quantity: 1 })
    vm.$store.commit('removeAllItems')
    
    expect(vm.$store.state.items.length).toBe(0)
  })
})
