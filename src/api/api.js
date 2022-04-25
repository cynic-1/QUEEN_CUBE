import request from './request'

// const baseURL = "http://localhost:8000/queencube";
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

  getNewsListIds(page) {
    return request({
      url: baseURL+"/getNewsListIds",
      method: 'get',
      params: {'page': page}
    })
  },
  getNewsListCard(id) {
    return request({
      url: baseURL+"/getNewsListCard",
      method: 'get',
      params: {'id': id},
    })
  },
  getDownload(productLine, productType, page) {
    return request({
      url: baseURL+"/getDownload",
      method: 'get',
      params: {'productLine': productLine, 'productType': productType, 'page': page}
    })
  },

  getIndexPage() {
    return request({
      url: baseURL+"/getIndexPage",
      method: 'get',
    })
  },
  getProductList(productLine, productType, current) {
    return request({
      url: baseURL+"/getProductList",
      method: 'get',
      params: {'productLine': productLine, 'productType': productType, 'current':current}
    })
  },
  getProductLines() {
    return request({
      url: baseURL+"/getProductLines",
      methods: 'get',
    })
  },
  productLittleCardData() {
    return request({
      url: baseURL+"/productLittleCardData",
      method: 'get',
    })
  },
  getSolutionDetail(tab) {
    return request({
      url: baseURL+"/getSolutionDetail",
      method: 'get',
      params:{
        'resolution': tab,
      }
    })
  },
  //TODO: backend interface!!!
  getSolutionLists() {
    return request({
      url: baseURL+"/getSolutionList",
      method: 'get'
    })
  },
  getSearchResults(word, panel, page) {
    return request(({
      url: baseURL+"/getSearchResults",
      method: 'get',
      params: {
        'word': word,
        'page': page,
        'panel': panel
      }
    }))
  }
}
