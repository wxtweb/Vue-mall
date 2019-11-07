<template>
  <div class="cheap-swiper">
    <swiper>
      <swiper-item v-for="item in chebanners">
        <a href="item.link"><img :src="item.image"> </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "CheapSwiper",
    props: {
      chebanners: {
        type: Array
      }
    },
    components: {
      Swiper,
      SwiperItem,
    }
  }
</script>

<style scoped>
  .cheap-swiper img {
    max-width: 100%;
    max-height: 150px;
  }
</style>
