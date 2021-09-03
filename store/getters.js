export default {
  totalOrderQuantity(state) {
    return state.items.reduce((totalOrderQuantity, item) => {
      return totalOrderQuantity + item.quantity
    }, 0)
  },
}
