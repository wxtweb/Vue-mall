<template>
    <div class="nav-bar">
      <div class="nav-title">
        <slot name="nav-icon-left"></slot>
        <slot name="nav-title"></slot>
      </div>
      <div class="nav-tool">
        <slot name="nav-tool-rigai"></slot>
        <slot name="nav-tool-rig1"></slot>
        <slot name="nav-tool-rig2"></slot>
        <slot name="nav-tool-rig3"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
.nav-bar {
  height: 44px;
  line-height: 44px;
  display: flex;
  border-bottom: 1px solid #dcdcdc;
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 9999;*/
  background-color: #fff;
}
  .nav-title{
    flex: 1;
    font-size: 18px;
    margin-left:15px;
    line-height: 44px;
    vertical-align: middle;
  }
  .nav-tool {
    /*flex: 1;*/
   margin-right: 15px;
    text-align: right;
  }
.nav-tool img {
  margin-left:20px;
}
.nav-title img {
  margin-right: 20px;
}

  .nav-title img, .nav-tool img{
    width: 22px;
    height: 22px;
    vertical-align: middle;

  }
</style>
