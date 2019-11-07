<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home.jpg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.jpg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cheap" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/cheap.jpg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/cheap_active.jpg">
      <div slot="item-text">好价</div>
    </tab-bar-item>
    <tab-bar-item path="/community" activeColor="green">
      <img slot="item-icon" src="~assets/img/tabbar/community.jpg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/community_active.jpg">
      <div slot="item-text">社区</div>
    </tab-bar-item>
    <tab-bar-item path="/Cart" activeColor="orange">
      <img slot="item-icon" src="~assets/img/tabbar/encyclopedia.jpg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/encyclopedia_active.jpg">
      <div slot="item-text">购物车({{cartLength}})</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <img slot="item-icon" src="~assets/img/tabbar/profile.jpg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.jpg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue';
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue';
  import {mapGetters} from 'vuex'
    export default {
        name: "MainTabBar",
        components: {
          TabBarItem,
          TabBar
        },
      computed: {
          ...mapGetters(['cartLength'])
      }

    }
</script>

<style scoped>

</style>
