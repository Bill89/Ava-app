<template>
  <section>
    <h4 class="f18 tl h30">{{ title }}</h4>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'SectionBox',
  props: {
    title: String
  },
  data() {
    return {}
  }
}
</script>
