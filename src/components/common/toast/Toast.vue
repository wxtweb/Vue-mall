<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    /*props: {
      message: {
        type: String,
        default: ''
      },
      toastShow: {
        type: Boolean,
        default: false
      }

    }*/
    data() {
      return{
        message: '',
       isShow: false
      }
    },
    methods: {
      toastShow(message='默认文字', duration=1500) {
        this.isShow = true;
        this.message = message;
        setTimeout(() => {
          this.isShow = false;
          this.message = ''
        },duration)


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
    z-index: 10;
  }
</style>
