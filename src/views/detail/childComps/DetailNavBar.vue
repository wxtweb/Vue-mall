<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <span slot="nav-icon-left" @click="backClick"><img src="~assets/img/detail/detail_back.png" alt=""/></span>

      <!-- <a slot="nav-tool-search" href="#"><img src="~assets/img/navbar/navbar_search.jpg" alt=""></a>
       <a slot="nav-tool-category" href="#"><img src="~assets/img/navbar/navbar_category.jpg" alt=""/></a>-->
      <a slot="nav-tool-rig1" href="#"><img src="~assets/img/detail/detail_more.png" alt=""/></a>
    </nav-bar>
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    methods: {
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  /*.detail-nav-bar {*/
  /*  position: fixed;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  top: 0;*/
  /*}*/
</style>
