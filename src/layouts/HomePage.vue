<template>
  <div class="home-page">
    <header class="bcblue tc f18 h44 lh44 white">首页</header>
    <div class="index-h ofh">
      <VScroll
        ref="nfScroll"
        @refresh="onRefresh"
        v-model="refresh"
        :refreshColor="refreshColor"
        up
      >
        <v-swiper :swiperData="images" @slideClick="goBannerView"></v-swiper>
        <div>
          <VSwiper>
            <!-- <template v-for="(image, index) in images">
              <van-swipe-item :key="index">
                <img v-lazy="image" height="100%">
              </van-swipe-item>
            </template>-->
          </VSwiper>
        </div>

        <!-- slot -->
        <slot></slot>
      </VScroll>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomePage',
  data() {
    return {
      refresh: true,
      refreshColor: {
        loadBgColor: '',
        textColor: '',
        cirCleColor: ''
        // loadBgColor: this.CONSTS.meTopColor,
        // textColor: this.CONSTS.updateColor,
        // cirCleColor: this.CONSTS.jumpBcColor
      },
      images: [
        {
          url:
            'http://sjbz.fd.zol-img.com.cn/t_s750x1334c/g5/M00/0B/0B/ChMkJliUSOeITI1nAHnnxyZwWQkAAZrMgCkzEsAeeff677.jpg'
        },
        {
          url:
            'http://sjbz.fd.zol-img.com.cn/t_s750x1334c/g5/M00/0B/0B/ChMkJliUSVuIZM2MALQYfOi1v5cAAZrNAEAneYAtBiU810.jpg'
        },
        {
          url:
            'http://sjbz.fd.zol-img.com.cn/t_s750x1334c/g5/M00/0B/0B/ChMkJ1iUTimIIOaiAL-Cez_5GXAAAZrPAHu3skAv4KT369.jpg'
        }
      ]
    }
  },
  components: {},
  computed: {
    chinesered() {
      return this.theme === 'chinesered' ? 'chinesered' : ''
    }
  },
  watch: {
    allBtns: {
      handler() {
        // this.common.initPageBtns('HomePage', this.blocks)
      },
      deep: true
    }
  },
  activated() {
    this.$refs.nfScroll.refresh()
  },
  mounted() {
    // 初始化页面按钮提示
    // this.common.initPageBtns('HomePage', this.blocks)

    setTimeout(() => {
      this.onRefresh()
    }, 200)
  },
  methods: {
    // 下拉刷新
    onRefresh() {
      Promise.all([])
        .then(res => {
          this.refresh = false
        })
        .catch(() => {
          this.refresh = false
        })
    },
    // 刷新视图，外层调用
    refreshView() {
      this.$refs.nfScroll.refresh()
    },
    goBannerView(data) {
      console.log(data)
    }
  }
}
</script>
<style scoped lang="scss">
.home-page {
}
</style>
