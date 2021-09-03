export default function ({ nuxtState, store }) {
  const itemsJSON = window.localStorage.getItem('order')
  
  if (itemsJSON) {
    setTimeout(() => store.commit('loadItems', JSON.parse(itemsJSON)), 100)
  }
}
