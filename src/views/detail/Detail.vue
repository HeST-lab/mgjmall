<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="detailnav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="detailscroll" @scroll="detailScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>

  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "../../components/content/goods/GoodsList";


  import {getDetail, getRecomment, Goods, GoodsParam, Shop} from "../../network/detail";
  import {debounce} from "../../common/utils";
  import {backTopMixin} from '../../common/mixin'

  export default {
    name: "Detail",
    components: {
      GoodsList,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
    },
    mixins: [backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommend: [],
        themeTopYs: [],
        newRefresh: null,
        getThemeTopY: null,
        currentIndex: 0,
      }
    },
    created() {
      //保存传入的id
      this.iid = this.$route.params.iid

      //根据iid请求参数
      getDetail(this.iid).then(res => {
        const data = res.result
        //获取顶部轮播图图片
        this.topImages = data.itemInfo.topImages

        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //获取店铺信息
        this.shop = new Shop(data.shopInfo)

        //获取商品详情信息
        this.detailInfo = data.detailInfo

        //获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        //获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }

        //定义BS可滚动区域刷新
        this.newRefresh = debounce(this.$refs.detailscroll.refresh, 500)

        //定义板块位置信息刷新
        this.getThemeTopY = debounce(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        }, 500)
      })

      //请求推荐数据--用good lists来展示
      getRecomment().then(res => {
        this.recommend = res.data.list
      })
    },
    mounted() {
      //定义可滚动距离刷新
      const refresh = debounce(this.$refs.detailscroll.refresh, 500)

      //商品推荐图片刷新
      this.$bus.$on('detailItemImageLoad', () => {
        refresh()
      })


    },
    methods: {
      //图片加载刷新页面可滚动信息，以及各板块位置信息
      detailImageLoad() {
        this.newRefresh()
        this.getThemeTopY()
      },
      //点击nav bar跳转相应位置
      titleClick(index) {
        this.$refs.detailscroll.scrollTo(0, -this.themeTopYs[index], 100)
      },
      //滚动到相应位置，nav bar变化
      detailScroll(position) {
        const positionY = -position.y

        for (let i in this.themeTopYs) {
          i = Number(i)
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < (this.themeTopYs[i + 1] || Number.MAX_VALUE))) {

            this.currentIndex = i
            this.$refs.detailnav.currentIndex = this.currentIndex}
        }

        //判断是否显示回到顶部按钮,mixin
        this.isShowBackTop = position.y < -1000
      },
      //添加购物车
      addToCart(){
        //购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.nowPrice
        product.iid = this.iid

        //将商品信息传给购物车 -- vuex
        this.$store.dispatch('addCart', product)
          .then(res => {
          this.$toast.show(res, 1500)
        })

      }
    }
  }
</script>

<style scoped>
  #detail {
    background-color: #fff;
    position: relative;
    z-index: 9;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 58px);
    position: relative;
  }

</style>