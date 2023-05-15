<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>

import Nav from '@/components/nav'

export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    Nav,
  }
}
</script>

<style lang="less" scoped></style>