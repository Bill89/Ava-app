import Vue from 'vue'
import VScroll from './VScroll'
import Swiper from './Swiper'
import Tabs from './Tabs'
import SwiperCard from './SwiperCard'
import { Lazyload, Swipe, SwipeItem } from 'vant'
// Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)

// Vue.use(Swipe).use(SwipeItem)

const CommonUi = {
  install: function(Vue) {
    Vue.component('VScroll', { extends: VScroll })
    Vue.component('VLazy', { extends: Lazyload })
    // Vue.component('VSwipe', { extends: Swipe })
    // Vue.component('VSwipeItem', { extends: SwipeItem })
    Vue.component('VSwiper', { extends: Swiper })
    Vue.component('VTabs', { extends: Tabs })
    Vue.component('VSwiperCard', { extends: SwiperCard })
  }
}
export default CommonUi
