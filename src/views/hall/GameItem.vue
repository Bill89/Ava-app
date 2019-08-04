<template>
  <div class="gane-item border-box w100 h100 bcfff pt10">
    <img v-lazy="item.url" width="57" height="57" />
    <p>{{ item.label }}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'GameItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
