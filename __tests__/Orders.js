import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex, { Store } from 'vuex'
import Vuetify from 'vuetify'
import Orders from '@/pages/orders.vue'
import state from '@/store/state.js'
import getters from '@/store/getters.js'
import mutations from '@/store/mutations.js'
import ResponseSnackbar from '@/components/ResponseSnackbar.vue'
import OrderDialog from '~/components/OrderDialog.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.component('ResponseSnackbar', ResponseSnackbar)
Vue.component('OrderDialog', OrderDialog)

function createOrders() {
  const wrapper = mount(Orders, {
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

describe('Orders', () => {
  test('completes order', () => {
    const { vm } = createOrders()
    
    const orderCount = vm.orders.length
    vm.orders.push({ name: '1', items: [] })
    vm.completeOrder(orderCount)
    
    expect(vm.orders.length).toBe(orderCount)
  })
})
