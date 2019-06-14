<template>
  <div class="home-page">
    <!-- <header class="bcblue tc f18 h44 lh44 white">首页</header> -->
    <header class="h130 bcblue y-center x-center">
      <div>
        <h2>奖金池</h2>
        <h4>总金额：999999</h4>
      </div>
    </header>
    <div class="index-h ofh">
      <VScroll
        ref="nfScroll"
        @refresh="onRefresh"
        v-model="refresh"
        :refreshColor="refreshColor"
        up
      >
        <van-swipe :autoplay="5000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image.url" height="150">
          </van-swipe-item>
        </van-swipe>

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
            'http://www.meinv.hk/wp-content/themes/Grace/timthumb.php?src=http://www.meinv.hk/wp-content/uploads/2016/02/2019021316082568-e1550045363119.jpg&h=300&w=750&zc=1'
        },
        {
          url:
            'http://up.54fcnr.com/pic_360/02/58/c0/0258c0ac9f67cf15d0729b120830c2b5.gif'
        },
        {
          url:
            'http://www.90a.cc/images/upload/2018/08/17/ChOxM1t2nW-AM2pvAAD19oAZAL8026.jpg'
        }
      ],
      gameHistorys: [{}]
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
