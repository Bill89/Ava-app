<template>
  <Header class="header m10 white">
    <h2 class="pl16 pt16 tl">Hi,{{ userInfo.userName }}</h2>
    <div class="flex-between mtb8">
      <div class="integral pl8">
        <span class="pr4">积分</span>
        <span>{{ userInfo.integral }}</span>
      </div>
      <div class="flex2">
        余额（元）
        <span class="detail-btn plr8 h20 lh20">
          详情
          <van-icon name="arrow-up" />
        </span>
      </div>
      <div></div>
    </div>
    <div class="amount f20 pb8">{{ userInfo.amount }}</div>
    <div class="grade flex-between mlr16 ptb8">
      <span>青铜</span>
      <div class="grade-color">
        <span class="inline-block" :style="{width: 50 + '%'}"></span>
      </div>
      <span>LV {{ userInfo.grade }}</span>
    </div>
  </Header>
</template>
<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      userInfo: {
        userName: 'admin',
        integral: 999,
        amount: 8888,
        grade: 6
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  background-color: dimgrey;
  border-radius: 0.375rem;
  .integral {
    background: crimson;
    border-radius: 0 16px 16px 0;
  }
  .flex2 {
    flex: 2;
  }
  .detail-btn {
    display: inline-block;
    background-color: aquamarine;
    border-radius: 6px;
  }
  .grade {
    border-top: 1px solid white;
    .grade-color {
      flex: 5;
      // height: 4px;
      // line-height: 4px;
      position: relative;
      height: 4px;
      background: #e5e5e5;
      border-radius: 4px;
      transform: translateY(9px);
      .inline-block {
        position: absolute;
        left: 0;
        height: 100%;
        border-radius: inherit;
        background: rgb(25, 137, 250);
      }
    }
  }
}
</style>
