<template>
  <div class="goods" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        //首页  推荐  分类   不知为何这样会导致分类里的找不到image
        //return this.goodsItem.show.img || this.goodsItem.image ||return this.goodsItem.img

        if (this.$route.path.indexOf('/home') !== -1) {
          return this.goodsItem.show.img
        } else if (this.$route.path.indexOf('/detail') !== -1) {
          return this.goodsItem.image
        }else if (this.$route.path.indexOf('/category') !== -1){
          return this.goodsItem.img
        }
      }
    },
    methods: {
      imgLoad() {
        if (this.$route.path.indexOf('/home') !== -1) {
          this.$bus.$emit('homeItemImageLoad')
        } else if (this.$route.path.indexOf('/detail') !== -1) {
          this.$bus.$emit('detailItemImageLoad')
        }else if (this.$route.path.indexOf('/category') !== -1){
          this.$bus.$emit('categoryItemImageLoad')
        }
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    },
  }
</script>

<style scoped>
  .goods {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>