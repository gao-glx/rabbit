import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";
export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])
  // 添加购物车操作
  const addCart = (goods) => {
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      item.count++
    }
    else {
      cartList.value.push(goods)
    }
  }
  // 删除购物车
  // 1.方法一：找到删除项的下标值 splice
  // 2.方法二：使用数组的过滤方法 filter
  const delCart = (skuId) => {

    const idx = cartList.value.findIndex((item) => {
      item.skuId === skuId
    })
    cartList.value.splice(idx, 1)
  }

  // 计算属性
  // 1.总数
  const allCount = computed(() =>
    cartList.value.reduce((a, c) => a + c.count, 0))
  const allPrice = computed(() =>
    cartList.value.reduce((a, c) => a + c.count * c.price, 0))
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice
  }
}, {
  persist: true
})