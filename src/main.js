// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化的样式文件
import '@/styles/common.scss'
// 定义懒加载插件
// import { useIntersectionObserver } from '@vueuse/core'
import { lazyPlugin } from './directives' //引入懒加载插件并注册
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')

// // 定义全局指令
// app.directive('img-lazy', {
//   // el：指令绑定的那个元素 img
//   // binding: binding.value 指令等于号后面绑定的表达式的值 图片url
//   mounted(el, binding) {
//     // console.log(el, binding.value)
//     const { stop } = useIntersectionObserver(
//       el, //target
//       ([{ isIntersecting }]) => { //isIntersecting booeal值，监听是否进入到视口区
//         // console.log(isIntersecting)
//         if (isIntersecting) {
//           // 进入视口区域
//           el.src = binding.value
//           stop()
//         }
//       },
//     )
//   }
// })
