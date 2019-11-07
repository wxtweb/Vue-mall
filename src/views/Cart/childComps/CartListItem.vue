<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :is-checked="itemInfo.checked" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥<span class="price">{{itemInfo.oldPrice | showPrice}}</span></div>
        <div class="item-count right">
          <button @click="decre" :disabled="deDisabled()">-</button>
          <span class="count">{{itemInfo.count}}</span>
          <button @click="incre" :disabled="inDisabled()">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkbutton/CheckButton";

  export default {
    name: "CartListItem",
    components: {
      CheckButton
    },
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.itemInfo.checked = ! this.itemInfo.checked
      },

      decre () {
        this.itemInfo.count--
      },
      incre() {
        this.itemInfo.count++
      },
      deDisabled() {
        return this.itemInfo.count <= 1
      },
      inDisabled() {
        return this.itemInfo.count >= 100
      }
    },
    filters: {
      showPrice(newPrice) {
        return newPrice.toFixed(2)
      }
    }
  }
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title,
  .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin: 15px 0;
  }

  .info-bottom {
    display: flex;
  }

  .item-price {
    color: #e62828;
    flex: 1;
  }
  .item-count button {
    border: none;
  }
  .count {
    width: 40px;
    text-align: center;
    padding: 2px 0;
    display: inline-block;
    /*background-color: #e62828;*/
  }
  .price {
    font-size: 20px;
    font-weight: bold;
  }
</style>
