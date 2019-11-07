import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

export default {
  addCart(context, payload) {
    /*let oldProduct = null     //方法一
    for(let item of state.cartList) {
      if(item.id === payload.id) {
        oldProduct = item
      }
    }
    if (oldProduct) {
      oldProduct.count += 1
    }else {
      payload.count =1
      state.cartList.push(payload)
    }*/
    return new Promise((resolve, reject) => {
      let oldProudct = context.state.cartList.find(item => item.id === payload.id)
      if(oldProudct) {
        context.commit(ADD_COUNTER, oldProudct)
        resolve('当前商品数量加1')
      }else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('添加到购物车成功')
      }
    })
  }
}
