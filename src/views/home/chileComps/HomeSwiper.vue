<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '../../../components/common/swiper/index'

  export default {
    name: "HomeSwiper",
    props: {
      banners: Array,
      default() {
        return [];
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imgLoad() {
        this.$emit('swiperImgLoad')
      }
    }
  }
</script>

<style scoped>

</style>