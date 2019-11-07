<template>
  <div class="goods" >
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
  }
</script>

<style scoped>
  .goods {
    width: 100%;
    background-color: #eee;
    overflow: hidden;
  }

</style>
