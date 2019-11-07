<template>
  <div class="back-top">
    <img src="~assets/img/home/backtop/home_backtop.png" alt=""/>
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 65px;

  }
  .back-top img {
    width: 24px;
    height:15px;
  }
  .back-top:hover {
    background-color:red;
  }
</style>
