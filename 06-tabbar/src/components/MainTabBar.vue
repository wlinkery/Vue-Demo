<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/1.png">
      <img slot="item-active" src="~assets/img/tabbar/1-1.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/3.png">
      <img slot="item-active" src="~assets/img/tabbar/3-3.png">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="darkorange">
      <img slot="item-icon" src="~assets/img/tabbar/2.png">
      <img slot="item-active" src="~assets/img/tabbar/2-2.png">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="orange">
      <img slot="item-icon" src="~assets/img/tabbar/4.png">
      <img slot="item-active" src="~assets/img/tabbar/4-4.png">
      <div slot="item-text" style="font-size: 16px">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>


</style>
