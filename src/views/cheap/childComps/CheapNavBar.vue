<template>
  <nav-bar>
    <span slot="nav-title">好价</span>
    <span slot="nav-tool-rigai" ><img src="~assets/img/navbar/navbar_ai.jpg" alt=""></span>
    <span slot="nav-tool-rig1" ><img src="~assets/img/navbar/navbar_search.jpg" alt=""></span>
    <span slot="nav-tool-rig2" ><img src="~assets/img/navbar/navbar_category.jpg" alt=""/></span>
    <span slot="nav-tool-rig3" ><img src="~assets/img/navbar/navbar_release.jpg" alt=""/></span>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "CheapNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>
