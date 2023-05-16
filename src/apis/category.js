import request from '@/utils/http'
// 面包屑接口封装
export function findTopCategoryAPI(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}