import request from './request'

// const baseURL = "http://localhost:8080";
const baseURL = "http://47.103.152.187:8000/queencube";

export default {
  getCooperators() {
    return request({
      url: baseURL+"/getCooperators",
      method: 'get',
    })
  },
  getAbout() {
    return request({
      url: baseURL+"/getAbout",
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
  getDownload() {
    return request({
      url: baseURL+"/getDownload",
      method: 'get',
    })
  },
  getIndexPage() {
    return request({
      url: baseURL+"/getIndexPage",
      method: 'get',
    })
  },
  getProductList() {
    return request({
      url: baseURL+"/getProductList",
      method: 'get',
    })
  },
  productLittleCardData() {
    return request({
      url: baseURL+"/productLittleCardData",
      method: 'get',
    })
  },
  getSolutionDetail() {
    return request({
      url: baseURL+"/getSolutionDetail",
      method: 'get',
    })
  },
}
