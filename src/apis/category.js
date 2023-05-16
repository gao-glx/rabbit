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

export const getCategoryAPI = (id) => {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}

// 二级几口数据
export const getCategoryFilterAPI = (id) => {
  return request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}