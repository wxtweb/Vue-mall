<template>
  <div class="goods-item" @click="itemClick" >
      <div class="goods-left">
        <img :src="goodsItem.image" alt="" @load="imageLoad">
      </div>
      <div class="goods-right">
        <h2 class="goods-title">{{goodsItem.title}}</h2>
        <p class="goods-price">{{goodsItem.price | showPrice}}</p>
        <p class="goods-cfav">
          <img src="@/assets/img/home/homegoods/icon-review.jpg">
          {{goodsItem.cfav}}
        </p>
      </div>
    <div class="goods-closed" >
      <img src="@/assets/img/home/homegoods/icon-closed.jpg">
    </div>
    <div class="clean"></div>

  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      },
      itemClick() {
        this.$router.push({
          path: '/detail',
          query: {
            id: this.goodsItem.id
          }
        })
      },
    },
    filters: {
      showPrice(price) {
        return '￥'+ price.toFixed(2)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    position: relative;
    /*height:114px;*/
    background-color: #fff;
    margin: 14px 7px;
    padding: 7px;
    overflow: hidden;
    color: #999999;
  }
  .goods-item a {
    padding: 7px;
    color: #999;
    text-decoration: none;
  }


  .goods-left img {
    max-height: 100px;
    max-width: 30%;
    float: left;
    margin-right: 7px;
  }

  .goods-right h2, p {
    margin: 0;
    padding:0 30px 0 0;
    font-size: 14px;

  }
  .goods-title {
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    /*width:68%;*/

  }
  .goods-price {
    color: #e62828;
    margin: 30px 0 5px 0;
  }
  .goods-cfav {
    font-size: 10px;
  }
  .goods-cfav img {
    vertical-align: middle;
    line-height: 10px;
    height: 9px;
    width: 9px;
  }
  .goods-closed {
    position: absolute;
    top: 2px;
    right: 7px;
    padding: 5px 7px;
  }
  .goods-closed img {
    height: 6px;
    width: 6px;
  }
  .clean {
    clear: both;
  }

</style>
