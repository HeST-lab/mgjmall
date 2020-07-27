<template>
  <div class="bottom-bar">
    <CheckButton  :is-checked="isSelectAll"
                  class="select-all"
                  @click.native="checkClick"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计:¥{{totalPrice}} </span>
    <span class="buy-product">去计算({{checkLength}})</span>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if (this.cartList.length === 0) return false
        //如果有没被选择的，返回false
        return !(this.cartList.length != this.checkLength)
      }
    },
    methods: {
      checkClick() {
       if (this.isSelectAll) {
         this.cartList.forEach(item => item.checked = false)
       } else {
         this.cartList.forEach(item => item.checked = true)
       }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-bar .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-bar .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-bar .buy-product {
    background-color: #38ceb1;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>