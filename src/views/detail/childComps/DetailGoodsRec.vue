<template>
  <div class="detail-goods-rec">
    <goods-list-item v-for="item in goodsRec.attention.list" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem'
  export default {
    name: "DetailGoodsRec",
    props: {
      goodsRec:{
        type: Object,
        default() {
          return {};
        }
      }
    },
    components: {
      GoodsListItem,
    }
  }
</script>

<style scoped>
  .detail-goods-rec {
    width: 100%;
    background-color: #eee;
    overflow: hidden;
  }
</style>
