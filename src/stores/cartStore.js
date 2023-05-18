import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";
import { useUserStore } from "./userStore";
import { insertCartAPI, findNewCartListAPI, delCartAPI } from "@/apis/cart";
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  const cartList = ref([])

  // 获取最新的购物车列表
  const updateNewList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }
  // 添加购物车操作
  const addCart = async (goods) => {
    const { skuId, count } = goods

    if (isLogin.value) {
      // 登录之后的加入购车逻辑
      await insertCartAPI({ skuId, count })
      updateNewList()

    } else {
      // 本地购物车逻辑
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        item.count++
      }
      else {
        cartList.value.push(goods)
      }
    }
  }

  // 删除购物车
  const delCart = async (skuId) => {
    if (isLogin.value) {
      // 调用接口实现接口购物车中的删除功能
      await delCartAPI([skuId])
      updateNewList()
    } else {
      // 思路：
      // 1. 找到要删除项的下标值 - splice
      // 2. 使用数组的过滤方法 - filter
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
  }
  // 清除购物车操作
  const clearCart = () => {
    cartList.value = []
  }
  // 计算属性
  // 1.总数
  const allCount = computed(() =>
    cartList.value.reduce((a, c) => a + c.count, 0))
  // 2.总价
  const allPrice = computed(() =>
    cartList.value.reduce((a, c) => a + c.count * c.price, 0))

  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  // 4. 已选择商品价钱合计
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

  const singleCheck = (skuId, selected) => {
    // 通过sluId找到要修改的一项,
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }

  // 全选功能action
  const allCheck = (selected) => {
    // 把cartList中的每一项的selected都设置为当前的全选框状态
    cartList.value.forEach(item => item.selected = selected)
  }

  const isAll = computed(() => cartList.value.every((item) => item.selected))
  // 计算属性

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck,
    selectedCount,
    selectedPrice,
    clearCart
  }
}, {
  persist: true
})