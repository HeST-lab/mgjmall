<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./chileComps/HomeSwiper";
  import RecommendView from "./chileComps/RecommendView";

  import {getHomeMultidata} from "../../network/home";


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then(res => {
       this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }

  }
</script>

<style scoped>
  .home-nav {
    /*var(--color-tint)*/
    background-color: #38ceb1;
    color: #fff;
  }
</style>