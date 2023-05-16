import httpInstance from "@/utils/http";
//轮播图API
export function getBannerAPI(paramas = {}) {
  // 默认1 商品2
  const { distributionSite = '1' } = paramas
  return httpInstance({
    url: 'home/banner',
    paramas: {
      distributionSite
    }
  })
}

// 封装新鲜好物接口
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

export const getHotAPI = () => {
  return httpInstance({
    url: 'home/hot'
  })
}

export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}