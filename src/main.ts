/* eslint-disable */
// 可以使用 // @ts-ignore 忽略下一行模块

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Navigation from 'vue-navigation'
import CommonUi from '@/components/CommonUi'
import common from '@/assets/js/common'
import utils from '@/assets/js/utils'

// 全局引入
import './registerServiceWorker'
import './assets/css/basic.scss'

Vue.use(Navigation, { router, keyName: '_p' })
Vue.use(CommonUi)

Vue.prototype.common = common
Vue.prototype.utils = utils

Vue.config.productionTip = false
Vue.config.errorHandler = (err, vm, info) => {
  console.error('compent:' + vm.$options.name)
  console.error('err:' + err.toString())
  console.error('info:' + info.toString())
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
