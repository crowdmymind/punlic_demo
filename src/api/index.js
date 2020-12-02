import request from '@/utils/request'

export function login(obj) {
  return request({
    url: '/api/web/login',
    method: 'post',
    data: {
      ...obj
    },
  })
}
export function getAttentionInfo(obj) {
  return request({
    url: '/api/attention/getInfo',
    method: 'get',
    params: {
      ...obj
    }
  })
}
