import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import Vuetify from 'vuetify'
import Menu from '@/pages/menu.vue'
import state from '@/store/state.js'
import getters from '@/store/getters.js'
import mutations from '@/store/mutations.js'
import MenuCategoryCard from '@/components/MenuCategoryCard.vue'
import MenuItemDialog from '@/components/MenuItemDialog.vue'
import ResponseSnackbar from '@/components/ResponseSnackbar.vue'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.component('MenuCategoryCard', MenuCategoryCard)
Vue.component('MenuItemDialog', MenuItemDialog)
Vue.component('ResponseSnackbar', ResponseSnackbar)

function createMenu() {
  const wrapper = mount(Menu, {
    store: new Store({
      state,
      getters,
      mutations,
    }),
    vuetify: new Vuetify(),
  })
  return { wrapper, vm: wrapper.vm }
}

describe('Menu', () => {
  test('adds item to order', () => {
    const { vm } = createMenu()
    
    vm.shownItem = { id: '1', name: 'Item' }
    vm.addShownItemToOrder(1)
    
    expect(vm.$store.state.items.length).toBe(1)
  })
})
