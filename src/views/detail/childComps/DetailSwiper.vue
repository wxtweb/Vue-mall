<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in itemInfo[0].images" :key="index">
        <a :href="item.link"><img :src="item.image" @load="imageLoad"></a>
      </swiper-item>
    </swiper>


  </div>
</template>


<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        isLoad: false
      }
    },
    props: {
      itemInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imageLoad() {
        if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }

      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    /*width: 100%;*/
    /*height: 150px;*/
  }
  .detail-swiper img {
    max-height:150px;
    max-width: 100%;
  }
</style>
