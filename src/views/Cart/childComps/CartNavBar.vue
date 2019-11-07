<template>
  <nav-bar>
    <span class="navtitle" slot="nav-title">购物车({{length}})</span>
    <span slot="nav-tool-rig1" >编辑</span>
    <span slot="nav-tool-rig3" ><img src="~assets/img/navbar/encyclopedia_more.png" alt=""/></span>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import {mapGetters} from 'vuex'
  export default {
    name: "CartNavBar",
    components: {
      NavBar,
    },
    computed: {
      // ...mapGetters(['cartLength', 'cartList'])
      ...mapGetters({
        length: 'cartLength',
        list: 'cartList'
      })
    }
  }
</script>

<style scoped>
  .navtitle {
    text-align: right;
  }
</style>
