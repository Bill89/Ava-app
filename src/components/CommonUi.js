import Vue from 'vue'
import VScroll from './VScroll'
import Tabs from './Tabs'
import SectionBox from './SectionBox'
import Countdown from './Countdown'
import SwiperCard from './SwiperCard'
import {
  Lazyload,
  Swipe,
  SwipeItem,
  Button,
  Icon,
  Search,
  Progress,
  Grid,
  GridItem,
  Cell,
  CellGroup
} from 'vant'

Vue.use(Lazyload)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Progress)
Vue.use(Grid).use(GridItem)
Vue.use(Cell).use(CellGroup)

const CommonUi = {
  install: function(Vue) {
    Vue.component('VScroll', { extends: VScroll })
    Vue.component('VTabs', { extends: Tabs })
    Vue.component('SectionBox', { extends: SectionBox })
    Vue.component('Countdown', { extends: Countdown })
    Vue.component('SwiperCard', { extends: SwiperCard })
  }
}
export default CommonUi
