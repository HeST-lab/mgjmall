<template>
  <div class="cart">
<!--    导航-->
    <nav-bar class="cart-nav-bar">
      <template #center>
        <div>购物车({{length}})</div>
      </template>
    </nav-bar>

<!--    商品列表-->
    <cart-list></cart-list>

<!--    底部汇总-->
    <cart-bottom-bar></cart-bottom-bar>

  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar,
    },
    computed: {
      ...mapGetters({
        length: 'cartLength'
      })
    }
  }
</script>

<style scoped>
  .cart-nav-bar {
    background-color: #38ceb1;
    color: #fff;
  }
  .cart {
    height: 100vh;

  }

</style>