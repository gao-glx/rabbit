// 管理用户数据
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/uesr.js'
import { ref } from 'vue'
export const useUserStore = defineStore('user', () => {
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
  }
  // 3.以对象的格式把state和action return
  return {
    userInfo,
    getUserInfo
  }
}
  ,
  {
    persist: true
  })