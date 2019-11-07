<template>
  <div class="category-wrapper">
    <div class="category-item" v-for="item in categorys" >
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryItem",
    props: {
      categorys: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .category-wrapper {
    display: flex;
    flex-flow: wrap;
    padding: 22px 7px;
  }
.category-item {
  width:20%;
  text-align: center;
  margin-bottom:19px;
}
  .category-item img {
    width:25px;
    height:25px;
    margin-bottom:9px;
  }
  .category-item a {
    color: #686868;
    font-size: 12px;
    text-decoration:none;
  }
</style>
