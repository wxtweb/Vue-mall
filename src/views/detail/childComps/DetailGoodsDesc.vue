<template>
  <div class="detailGoodsDesc">
    <h2>{{GoodsDesc[0].GoodsDesc.title}}</h2>
    <p>{{GoodsDesc[0].GoodsDesc.desc1}}</p>
    <p>{{GoodsDesc[0].GoodsDesc.desc2}}</p>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsDesc",
    data() {
      return {

      }
    },
    props: {
      GoodsDesc: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detailGoodsDesc {
    color: #000000;
    font-size: 12px;
    padding:15px ;
  }
  .detailGoodsDesc h2 {
    margin: 0;
    padding: 0;
  }
</style>
