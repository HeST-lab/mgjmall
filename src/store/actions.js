export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // let oldProduct = state.cartList.find(item => item.iid === payload.iid)
      let oldProduct = null
      for (let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item
        }
      }
      if (oldProduct) {
        //如果添加的商品已经存在，则让cartList里的商品count+1
        context.commit('addCount', oldProduct)
        resolve('当前商品数量加一')
      } else {
        //如果不存在，则添加payload商品count属性，且赋值为1，然后添加进cartList
        payload.count = 1
        payload.checked = false
        context.commit('addCart', payload)
        resolve('商品添加成功')
      }
    })
  }
}