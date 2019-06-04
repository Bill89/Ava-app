import VScroll from './VScroll'

const CommonUi = {
  install: function(Vue) {
    Vue.component('VScroll', { extends: VScroll })
  }
}
export default CommonUi
