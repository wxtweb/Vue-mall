<template>
  <div id="Community">
    <community-nav-bar/>
    <scroll-tab :titles="['好文','晒物']" @tabClick="tabClick"/>
    <community-swiper :combanners="combanners"></community-swiper>
  </div>
</template>

<script>
  import ScrollTab from 'components/content/scrolltab/ScrollTab'
  import CommunityNavBar from './childComps/CommunityNavBar'
  import  CommunitySwiper from './childComps/CommunitySwiper'

    export default {
        name: "Community",
        data() {
          return {
            currentType: '',
            combanners: [
              {
                link: '#',
                title: '社区好文111',
                image: require('@/assets/img/detail/detailSwiper/detail_swiper_1.jpg')
              },
              {
                link: '#',
                title: '社区好文22',
                image: require('@/assets/img/detail/detailSwiper/detail_swiper_2.jpg')
              }
            ]
          }
        },
        components: {
          CommunityNavBar,
          ScrollTab,
          CommunitySwiper
        },
        methods: {
          tabClick (index) {
            switch (index) {
              case 0:
                this.currentType = ''
                break
              case 1:
                this.currentType = ''
                break
            }
          }
        }
    }
</script>

<style scoped>
  .active {

  }
</style>
