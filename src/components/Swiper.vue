<template>
  <div class="reset-swiper">
    <swiper :options="swiperOption" ref="refswiper">
      <swiper-slide v-for="(image, index) in swiperData" :key="index">
        <img width="100%" v-lazy="image.url || defaultImg">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  props: ['swiperData', 'defaultImg'],
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.refswiper.swiper
    },
    pagination() {
      return this.$refs.refswiper.swiper.pagination
    }
  },
  watch: {
    swiperData: function() {
      this.update()
    }
  },
  data() {
    let self = this
    return {
      iObserver: null,
      swiperOption: {
        spaceBetween: 0,
        centeredSlides: true,
        effect: 'fade',
        resistanceRatio: 0, // 抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离
        autoplay: {
          delay: 3000,
          loop: true,
          disableOnInteraction: false
        },
        touchMoveStopPropagation: false, // 解决和iscroll冲突问题 true阻止touchmove冒泡事件
        pagination: {
          el: '.swiper-pagination'
        },
        watchOverflow: true, // 当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航
        on: {
          click(e) {
            let activeIndex = self.swiper.activeIndex
            self.piwikTrack.piwikTrackEvent({
              action: '点击banner广告',
              pvalue:
                self.swiperData[activeIndex].title +
                '_' +
                self.swiperData[activeIndex].detailurl
            })
            self.$emit('slideClick', self.swiperData[activeIndex], activeIndex)
          }
        }
      }
    }
  },
  deactivated() {
    this.stopSwiper()
  },
  activated() {
    let self = this
    this.initPagination()
    setTimeout(() => {
      self.startSwiper()
    }, 200)
  },
  beforeDestroy() {
    this.iObserver &&
      this.swiper &&
      this.iObserver.unobserve(this.swiper.$el[0])
  },
  mounted() {
    this.addEvent()
  },
  methods: {
    initPagination() {
      if (this.swiperData.length > 1) {
        let pagEl = this.swiper.$el[0].getElementsByClassName(
          'swiper-pagination-bullet'
        )
        // 如果没有分页点 则重新初始化
        if (!pagEl || pagEl.length === 0) {
          this.pagination.init()
          this.pagination.render()
          this.pagination.update()
        }
      }
    },
    startSwiper() {
      if (this.swiper) {
        if (!this.swiper.autoplay.start()) {
          // 如果启动失败，停止再次启动
          this.stopSwiper()
          this.swiper.autoplay.start()
        }
      }
    },
    stopSwiper() {
      if (this.swiper) {
        this.swiper.autoplay.stop()
      }
    },
    addEvent() {
      if (!this.swiper) {
        return
      }
      let self = this
      if (!window.IntersectionObserver) {
        console.warn('此设备暂不支持IntersectionObserver属性')
        return
      }
      this.$nextTick(function() {
        self.iObserver = new IntersectionObserver(entries => {
          // intersectionRatio：目标元素的可见比例 完全可见时为1，完全不可见时小于等于0
          if (entries && entries[0].intersectionRatio <= 0) {
            self.stopSwiper()
          } else {
            self.startSwiper()
          }
        })
        self.iObserver.observe(self.swiper.$el[0])
      })
    },
    update() {
      this.swiper && this.swiper.update()
    }
  }
}
</script>
<style scoped>
.reset-swiper {
  line-height: 0;
}
</style>
