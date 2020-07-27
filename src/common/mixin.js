import BackTop from "../components/content/backTop/BackTop";
import {NEW, POP, SELL} from "./const";


export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      if (this.$refs.detailscroll) {
        this.$refs.detailscroll.scrollTo(0, 0)
      } else if (this.$refs.scroll) {
        this.$refs.scroll.scrollTo(0, 0)
      }
    },
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}