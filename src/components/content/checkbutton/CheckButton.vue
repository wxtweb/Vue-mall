<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/chart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button {

    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .check {
    border-color: #e62828;
    background-color: #e62828;
  }
</style>
