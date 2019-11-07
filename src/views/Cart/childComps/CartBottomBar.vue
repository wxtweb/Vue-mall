<template>
  <div class="cart-bottom-bar">
    <div class="check-content" >
      <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="total-price">合计:{{totalPrice}}</div>
    <div class="go-settlement">去结算：({{totalCount}})</div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkbutton/CheckButton";
  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.oldPrice * item.count
        },0).toFixed(2)
      },
      totalCount() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count
        }, 0)
        // return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        if(this.$store.state.cartList.length === 0) return false
        // return !(this.$store.state.cartList.find(item => !item.checked))
       return this.$store.state.cartList.every(item => item.checked)
      }
    },
    methods: {
      checkClick() {
        if(this.isSelectAll) {
          this.$store.state.cartList.forEach(item => item.checked = false)
        }else{
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    height: 40px;
    position: relative;
    background-color: #fafafa;
    line-height: 40px;
    display: flex;
    padding: 10px;
  }
  .check-content {
    width: 80px;
    display: flex;
    align-items: center;
  }
  .check-button {
    width: 15px;
    height: 15px;
    margin: 0 5px 0 12px;
    line-height: 15px;
  }
  .total-price {
    margin:0 10px;
    flex: 1;
    font-size: 14px;
  }
  .go-settlement {
    width: 120px;
    color: #fff;
    /*font-weight: bold;*/
    background-color: #e62828;
    border-radius: 20px;
    text-align: center;
  }
</style>
