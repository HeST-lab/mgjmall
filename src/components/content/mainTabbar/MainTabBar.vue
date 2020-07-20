<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#38ceb1">
      <img slot="item-icon" src="../../../assets/img/tabbar/shouye.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/shouye_1.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#38ceb1">
      <img slot="item-icon" src="../../../assets/img/tabbar/fenlei.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/fenlei_1.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#38ceb1">
      <img slot="item-icon"  src="../../../assets/img/tabbar/gouwuche.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/gouwuche_1.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#38ceb1">
      <img  slot="item-icon" src="../../../assets/img/tabbar/wode.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/wode_1.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>