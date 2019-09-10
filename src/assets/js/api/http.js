/* eslint-disable */
import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
import httpbase from '@/assets/js/api/httpBase.js'
import { errApiIgnore } from '@/assets/js/api/apiType.js'
// import NfUi from '@/components/NfUi.js'
const httpFetch = {}
const Axios = axios.create({
  baseURL: process.env.SERVER_URL,
  timeout: process.env.AXIOS_TIME_OUT
  // headers: {
  //   'Content-type': 'application/json; charset=UTF-8'
  // }
})
Axios.interceptors.request.use(
  config => {
    return httpbase.requestInterceptor(config)
  },
  error => {
    return Promise.reject(error.message)
  }
)
// 拦截
Axios.interceptors.response.use(
  response => {
    return httpbase.responseSucInterceptor(response)
  },
  error => {
    if (error.code && error.code === 'ECONNABORTED') {
      error.response = {}
      error.response.status = 408
    }
    return httpbase.responseErrorInterceptor(error)
  }
)
/**
 * get请求
 * @param functionNo 功能号
 * @param data 参数
 * @param isNeedCache 是否需要缓存改数据
 */
httpFetch.get = (url, params = {}) => {
  //这个参数是要POST的
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        reject(error)
      })
  })
}
/**
 * post请求
 * @param functionNo 功能号
 * @param data 参数
 * @param isNeedCache 是否需要缓存改数据
 */
httpFetch.post = (functionNo, data = {}, isNeedCache = false) => {
  return httpbase.post('', functionNo, data, isNeedCache, httpFetch)
}

httpFetch.nfpost = (url, functionNo, data = {}, isNeedCache = false) => {
  return new Promise((resolve, reject) => {
    Axios.post(url, data)
      .then(response => {
        httpbase.responseSuccess(
          data.function,
          response,
          res => {
            resolve(res)
          },
          err => {
            if (errApiIgnore.includes(functionNo) && err && err.message) {
              if (!response || response.data === undefined || !response.data) {
                Toast('数据返回错误！')
              } else {
                Toast(err.message)
              }
            }
            reject(err)
          }
        )
        store.commit('HIDE_LOADING', functionNo)
      })
      .catch(err => {
        store.commit('HIDE_LOADING', functionNo)
        console.log('请求异常信息：' + err)
        reject({}) // 返回空的对象，前端需要知道请求结束
      })
  })
}
/**
 * 加载本地api数据
 * @param functionNo 功能号
 */
httpFetch.getLocalData = functionNo => {
  return httpbase.getLocalData(functionNo)
}

/**
 * 保存为本地数据
 * @param key 功能号
 * @param data 数据
 */
httpFetch.setLocalData = (key, data) => {
  return httpbase.setLocalData(key, data)
}

// TODO
function rediect(config) {
  // mock 数据的url 最后一部分的命名必须是参数 function
  var functionNo = config.url
  var rediectUrl = process.env.SERVER_URL + /*config.method +*/ +functionNo
  return rediectUrl
}
export default httpFetch
