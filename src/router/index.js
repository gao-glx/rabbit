import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import CheckOut from '@/views/CheckOut/index.vue'
import Pay from "@/views/Pay/index.vue"
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import MemberInfo from '@/views/Member/components/UserInfo.vue'
import MemberOrder from '@/views/Member/components/UserOrder.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  //创建history模式路由
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: '/cartlist',
          component: CartList
        },
        {
          path: "/checkout",
          component: CheckOut
        },
        {
          path: "/pay",
          component: Pay
        },
        {
          path: "/paycallback",
          component: PayBack

        },
        {
          path: '/member',
          component: Member,
          children: [
            {
              path: 'user',
              component: MemberInfo
            },
            {
              path: 'order',
              component: MemberOrder
            }
          ]
        }

      ]
    },
    {
      path: "/Login",
      component: Login
    }

  ]//配置path和component对应关系的位置
  // 滚动路由定制
  , scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
