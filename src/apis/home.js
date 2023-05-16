import httpInstance from "@/utils/http";
//轮播图API
export function getBannerAPI() {
  return httpInstance({
    url: 'home/banner',
    // pramas: {
    //   distributionSite: ""
    // }
  })
}

// 封装新鲜好物接口
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

export const getHotAPI = () => {
  return httpInstance('home/hot', 'get', {})
}