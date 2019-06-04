import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () =>
        import(/* webpackChunkName: "index" */ '@/layouts/Index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '*',
      redirect: '/index' // 此重置路由必须在最后一个才有效，勿动
    }
  ]
})
