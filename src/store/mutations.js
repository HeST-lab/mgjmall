export default {
  addCount(state, payload) {
    payload.count++
  },
  addCart(state, payload) {
    state.cartList.push(payload)
  },
  checkClick(state, payload) {
    payload.checked = !payload.checked
  }
}