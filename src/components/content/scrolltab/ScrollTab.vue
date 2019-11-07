<template>
  <div class="scroll-tab">
    <div class="scroll-tab-item" v-for="(item, index) in titles" :key="item"
         :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ScrollTab",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick (index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .scroll-tab {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 44px;
    width: 100%;
    line-height: 44px;
    background-color: #fff;
    /*position: fixed;*/
    /*top: 44px;*/
    /*lert:0;*/
    /*right: 0;*/
    /*z-index: 9999;*/

  }
  .scroll-tab-item {
    flex: 1;
  }
  .scroll-tab-item span {
    padding: 11px 0;
  }
  .active {
    color: #e62828;
  }
  .active span {
    border-bottom: 3px solid #e62828;
  }
</style>
