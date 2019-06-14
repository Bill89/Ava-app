import Vue from 'vue'
import VScroll from './VScroll'
import Tabs from './Tabs'
import { Lazyload, Swipe, SwipeItem } from 'vant'

Vue.use(Lazyload)
Vue.use(Swipe).use(SwipeItem)

const CommonUi = {
  install: function(Vue) {
    Vue.component('VScroll', { extends: VScroll })
    Vue.component('VTabs', { extends: Tabs })
  }
}
export default CommonUi
