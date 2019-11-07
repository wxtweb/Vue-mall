<template>
  <div class="encyclopeida-swiper">
    <swiper>
      <swiper-item v-for="item in encybanners">
        <a :href="item.link"><img :src="item.image"></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "EncyclopediaSwiper",
    props: {
      encybanners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .encyclopeida-swiper img {
    max-width: 100%;
    max-height: 150px;
  }
</style>
