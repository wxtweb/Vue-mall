<template>
  <div class="base-info" v-if="Object.keys(infoItem) !== 0">
    <div class="info-title">
      <span class="theme-title" :style="{background:infoItem[0].themeBgColor}">{{infoItem[0].themeDesc}}</span>
      <span>{{infoItem[0].title}}</span>
    </div>
    <div class="info-price">
      <span class="n-price" >{{infoItem[0].newPrice}}</span>
      <span class="o-price" >{{infoItem[0].oldPrice}}</span>
      <span class="d-price"
            :style="{background: infoItem[0].discountBgColor}">
            {{infoItem[0].discountDesc}}
      </span>
    </div>
    <div class="info-source" >
      <span>{{infoItem[0].sourceAuthor}}</span>
      <span class="separator">|</span>
      <span>{{infoItem[0].sourceStore}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      infoItem: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    padding: 15px;
  }
  .info-title {
    font-size: 18px;
    font-weight: bold;
    line-height:30px;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .theme-title, .d-price {
    /*height: 30px;*/
    line-height: 28px;
    vertical-align: top;
    padding: 3px 7px;
    margin: -2px 10px 0 0;
    font-size: 12px;
    font-weight: normal;
    color: #ffffff;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
  .info-price {
    /*height: 30px;*/
    /*line-height: 30px;*/
    /*font-size: 18px;*/
    margin: 7px 0;

  }
  .n-price {
    color:#e62828;
    margin-right: 7px;
    font-size: 20px;
  }
  .o-price {
    color: #999999;
    text-decoration: line-through;
    margin-right: 7px;
    font-size: 12px;
  }
  .d-price {
    /*font-size: 8px;*/
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .info-source {
    color: #999999;
    font-size: 14px;
  }
  .separator {
    margin: 0 5px;
  }
</style>
