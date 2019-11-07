<template>
  <div id="cart">
    <cart-nav-bar/>
    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
    import CartNavBar from './childComps/CartNavBar'
    import CartList from "./childComps/CartList";
    import CartBottomBar from "./childComps/CartBottomBar";
    import {mapGetters} from 'vuex'
    export default {
        name: "Cart",
        components: {
          CartNavBar,
          CartList,
          CartBottomBar
        },
        data() {
          return {

          }
        },
      computed: {
          // ...mapGetters(['cartLength', 'cartList'])
            ...mapGetters({
              length: 'cartLength',
              // list: 'cartList'
            })
      }
    }
</script>

<style scoped>
  #cart {
    height: 100vh;
  }
</style>
