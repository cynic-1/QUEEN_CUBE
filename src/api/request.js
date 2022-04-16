import axios from 'axios'
import {LocalStorage} from "quasar";

axios.defaults.withCredentials = true

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  timeout: 2000,
})

service.interceptors.request.use(

  config => {
    config.headers["Content-Type"] = 'application/json'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    console.log(response)
    return response
  },

  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service

// res.data.code === 0 && res.status === 200
/*
else if (res.status===200){
  alert(res.data.message);
} else {
  alert("再处理你的请求时，出现致命错误！")
}
*/


