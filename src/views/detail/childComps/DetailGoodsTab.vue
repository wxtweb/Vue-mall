<template>
  <div class="detailGoodsTab">
    <div class="detailGoodsTabItem"
         :class="{active:index === currentIndex}"
         v-for="(item, index) in titles"
         @click="itemClick(index)" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsTab",
    data() {
      return {
        currentIndex:0
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
      itemClick(index) {
        // console.log(index);
        this.currentIndex = index
        this.$emit('tabItemClick',index)
      }
    }
  }
</script>

<style scoped>
  .detailGoodsTab {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }
  .detailGoodsTabItem {
    flex: 1;

  }
  .detailGoodsTabItem span {
    padding:5px 0;
  }
  .active {
    color: #e62828;
  }
  .active span {
    border-bottom: 2px solid #e62828;
  }
</style>
