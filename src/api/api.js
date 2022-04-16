import request from './request'

const baseURL = "http://localhost:8080";

export default {
  getCooperators() {
    return request({
      url: baseURL+"/getCooperators",
      method: 'get',
    })
  },
  getNewsListIds() {
    return request({
      url: baseURL+"/getNewsListIds",
      method: 'get',
    })
  },
  getNewsListCard(id) {
    return request({
      url: baseURL+"/getNewsListCard",
      method: 'get',
      params: {'id': id},
    })
  },

}
