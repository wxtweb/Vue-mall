<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
#tab-bar {
  display: flex;
  width: 100%;
  height: 55px;
  background-color: #fafafa;
  position: fixed;
  bottom: 0px;
  box-shadow: 0 -1px 1px rgb(100,100,100,0.2);
}
</style>
