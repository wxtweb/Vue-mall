<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addToCart() {
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #fff;
    position:absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    text-align: center;
    z-index: 9;
  }
  .bar-item {
    flex: 1;
    display: flex;
    width: 50px;
  }
  .bar-item > div {
    flex: 1;
  }
  .bar-left .text {
    font-size: 13px;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 4px auto 3px;
    background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
  }
  .bar-left .service {
    background-position: 0 -54px;
  }
  .bar-left .shop {
    background-position: 0 -98px;
  }
  .bar-right {
    display: flex;
    width: 210px;
    font-size: 15px;
    color: #fff;
    line-height: 35px;
    height: 35px;
    font-size: 18px;
    margin: auto 0;
  }
  .bar-right .cart {
    background-color:#e62828;
    border-radius: 20px;
    padding: 0 7px;
    width: 200px;
  }
  .bar-right .buy {
    background-color: #ffa800;
    border-radius: 20px;
    margin: 0px 5px;
  }
</style>
