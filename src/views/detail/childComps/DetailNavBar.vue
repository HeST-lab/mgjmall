<template>
  <nav-bar>
    <template #center>
      <div class="title">
        <div v-for="(item, index) in titles"
             class="title-item"
             @click="titleClick(index)"
             :class="{active: index === currentIndex}">
          {{item}}
        </div>
      </div>
    </template>
    <template #left>
      <div @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="" class="back-img">
      </div>
    </template>
  </nav-bar>
</template>

<script>

  import NavBar from "../../../components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: #38ceb1;
  }

  .back-img {
    margin-top: 10px;
  }
</style>