import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Navigation from 'vue-navigation'
import CommonUi from '@/components/CommonUi'
import './registerServiceWorker'
// 全局引入
import './assets/css/basic.scss'

Vue.use(Navigation, { router, keyName: '_p' })
Vue.use(CommonUi)

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
