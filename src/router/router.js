import Vue from 'vue'
import Router from 'vue-router'
// 模块懒加载
// 建议全部使用懒加载模式引用 例子：
// component: () => import('@/pages/product/FinancialPlanDetail')
Vue.use(Router)
Router.prototype.go = function() {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  linkActiveClass: 'nf-active',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import(/* webpackChunkName: "index" */ '@/layouts/Index')
    },
    {
      path: '/nofound',
      name: 'Page404',
      meta: { name: '404页面' },
      component: () => import(/* webpackChunkName: "Page404" */ '@/components/Page404')
    },
    {
      path: '/register',
      name: 'Register',
      meta: { name: '注册' },
      component: () => import(/* webpackChunkName: "Register" */ '@/pages/login/Register')
    },
    {
      path: '/login',
      name: 'Login',
      meta: { name: '登录' },
      component: () => import(/* webpackChunkName: "Login" */ '@/pages/login/Login')
    },
    // {
    //   path: '/assets',
    //   name: 'AssetsPage',
    //   meta: { isNeedLogin: true, name: '资产' },
    //   component: () => import(/* webpackChunkName: "AssetsPage" */ '@/pages/account/AssetsPage')
    // },
    // {
    //   path: '/expert-advisor',
    //   name: 'ExpertAdvisor',
    //   meta: { isNeedLogin: true, name: '智能认购' },
    //   component: () => import(/* webpackChunkName: "ExpertAdvisor" */ '@/pages/account/ExpertAdvisor')
    // },
    // {
    //   path: '/profit-detail',
    //   name: 'ProfitDetails',
    //   meta: { isNeedLogin: true, name: '收益明细' },
    //   component: () => import(/* webpackChunkName: "ProfitDetails" */ '@/pages/account/ProfitDetails')
    // },
    {
      path: '*',
      redirect: '/index' // 此重置路由必须在最后一个才有效，勿动
    }
  ]
})
