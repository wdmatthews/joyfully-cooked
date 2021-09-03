import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import QuantityField from '@/components/QuantityField.vue'

Vue.use(Vuetify)

function createQuantityField(props) {
  const propsData = props ?? {
    value: 2,
    item: { price: 1.00 },
  }
  
  const wrapper = mount(QuantityField, {
    vuetify: new Vuetify(),
    propsData,
    listeners: {
      input: (value) => {
        propsData.value = value
      },
    },
  })
  
  return { wrapper, vm: wrapper.vm, propsData }
}

describe('QuantityField', () => {
  test('has quantity of 1 when preferredQuantity is 1', () => {
    const { vm, propsData } = createQuantityField()
    
    vm.preferredQuantity = '1'
    vm.parsePreferredQuantity()
    
    expect(propsData.value).toBe(1)
  })
  
  test('has quantity of 0 when preferredQuantity is empty', () => {
    const { vm, propsData } = createQuantityField()
    
    vm.preferredQuantity = ''
    vm.parsePreferredQuantity()
    
    expect(propsData.value).toBe(0)
  })
  
  test('has quantity of 0 when preferredQuantity is abc', () => {
    const { vm, propsData } = createQuantityField()
    
    vm.preferredQuantity = 'abc'
    vm.parsePreferredQuantity()
    
    expect(propsData.value).toBe(0)
  })
  
  test('has quantity of 1 when preferredQuantity is abc1', () => {
    const { vm, propsData } = createQuantityField()
    
    vm.preferredQuantity = 'abc1'
    vm.parsePreferredQuantity()
    
    expect(propsData.value).toBe(1)
  })
  
  test('resets when given an item', async () => {
    const { wrapper, vm, propsData } = createQuantityField()
    
    propsData.item = { price: 2.00 }
    await wrapper.setProps(propsData)
    
    expect(propsData.value).toBe(1)
    expect(vm.preferredQuantity).toBe('1')
  })
  
  test('has price of 2 with quantity 2 of $1.00 item', () => {
    const { vm } = createQuantityField()
    
    vm.preferredQuantity = '2'
    vm.parsePreferredQuantity()
    
    expect(vm.price).toBe(2)
  })
})
