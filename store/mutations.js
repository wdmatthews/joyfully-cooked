export default {
  loadItems(state, items) {
    state.items = items
  },
  addItemToOrder(state, { item: itemToAdd, quantity }) {
    for (let i = state.items.length - 1; i >= 0; i--) {
      const item = state.items[i]
      
      if (item.id === itemToAdd.id) {
        item.quantity += quantity
        return
      }
    }
    
    state.items.push({
      id: itemToAdd.id,
      quantity,
    })
    
    window.localStorage.setItem('order', JSON.stringify(state.items))
  },
  setItemQuantity(state, { index, quantity }) {
    state.items[index].quantity = quantity
    window.localStorage.setItem('order', JSON.stringify(state.items))
  },
  removeItem(state, index) {
    state.items.splice(index, 1)
    window.localStorage.setItem('order', JSON.stringify(state.items))
  },
  removeAllItems(state) {
    state.items = []
    window.localStorage.setItem('order', JSON.stringify(state.items))
  },
}
