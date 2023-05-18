// 管理用户数据
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/uesr.js'
import { ref } from 'vue'
import { useCartStore } from './cartStore'
import { margeCartAPI } from '@/apis/cart'
// import {updateNewList}
export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
  // 1.定义数据
  const userInfo = ref({
    // account: '18610848230',
    // password: '123456',
    // agree: true
  })
  // 2.定义获取接口数据的函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
    // 合并购物车操作
    await margeCartAPI(cartStore.cartList.map((item) => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    cartStore.updateNewList()
  }

  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }
  // 3.以对象的格式把state和action return
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}
  ,
  {
    persist: true
  })