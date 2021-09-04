import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import ResponseSnackbar from '@/components/ResponseSnackbar.vue'

Vue.use(Vuetify)

function createResponseSnackbar() {
  const wrapper = mount(ResponseSnackbar, {
    vuetify: new Vuetify(),
  })
  return { wrapper, vm: wrapper.vm }
}

describe('ResponseSnackbar', () => {
  test('is visible when show is called', () => {
    const { wrapper, vm } = createResponseSnackbar()
    const snackbar = wrapper.findComponent({ name: 'v-snackbar' })
    
    vm.show()
    
    expect(vm.isVisible).toBeTruthy()
    expect(snackbar.isVisible()).toBeTruthy()
  })
  
  test('sets data properly when show is called', () => {
    const { vm } = createResponseSnackbar()
    const message = 'message'
    const color = 'color'
    const icon = 'icon'
    
    vm.show(message, color, icon)
    
    expect(vm.message).toBe(message)
    expect(vm.color).toBe(color)
    expect(vm.icon).toBe(icon)
  })
})
