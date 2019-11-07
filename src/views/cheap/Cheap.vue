<template>
  <div id="cheap">
    <cheap-nav-bar/>
    <cheap-swiper :chebanners="chebanners"/>
  </div>
</template>

<script>
  import CheapNavBar from './childComps/CheapNavBar'
  import CheapSwiper from './childComps/CheapSwiper'
    export default {
        name: "Cheap",
        components: {
          CheapSwiper,
          CheapNavBar
        },
        data() {
          return {
            chebanners: [
              {
                link: '#',
                title: '好价',
                image: require('@/assets/img/detail/detailSwiper/detail_swiper_1.jpg')
              },
              {
                link: '#',
                title: '好价',
                image: require('@/assets/img/detail/detailSwiper/detail_swiper_2.jpg')
              }
            ]
          }
        }

    }
</script>

<style scoped>
  .content {

  }
</style>
