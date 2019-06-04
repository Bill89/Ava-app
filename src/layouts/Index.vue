<template>
  <div class="root-layout">
    <!-- 主页 -->
    <keep-alive>
      <component
        class="root-content"
        :is="currentTab"
        :class="{'prod-slider': currentTab === 'ProductPage'}"
      ></component>
    </keep-alive>
    <!-- 底部导航 -->
    <index-footer v-model="currentTab"></index-footer>
  </div>
</template>
<script>
import HomePage from '@/layouts/HomePage'
import IndexFooter from '@/layouts/IndexFooter'

export default {
  name: 'Index',
  data() {
    return {
      currentTab: 'HomePage'
      // currentTab: this.common.getSesVal('index_currentTab')
      //   ? this.common.getSesVal('index_currentTab')
      //   : 'HomePage'
    }
  },
  components: {
    HomePage,
    IndexFooter
  },
  watch: {
    currentTab() {
      this.init()
    }
  },
  methods: {
    init() {
      console.log(this.currentTab)
    }
  }
}
</script>
<style lang="scss" scoped>
.root-layout {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.root-content {
  height: calc(100% - 3.125rem);
  width: 100%;
  box-sizing: border-box;
  &.prod-slider {
    height: calc(100% - 5.125rem);
  }
}
</style>
