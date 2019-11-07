<template>
  <div class="toast" v-show="toastShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      message: {
        type: String,
        default: ''
      },
      toastShow: {
        type: Boolean,
        default: false
      }

    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    padding: 5px 8px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    color: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 20px;
    background-color: rgba(230, 40, 40, .7);
  }
</style>
