<template>
  <div class="DetailGoodsDetails">
    <img v-for="(item, index) in goodsDetial[0].list" :src="item" :key="index" @load="imgload" />
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsDetails",
    props: {
      goodsDetial: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      imgload() {
        this.$emit('detailImageLoad')
      }
    }
  }
</script>

<style scoped>
  .DetailGoodsDetails {
    /*padding: 20px 0;*/

  }
  .DetailGoodsDetails img {
    height: 100%;
    width: 100%;
  }
</style>
