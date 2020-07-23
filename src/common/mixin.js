import BackTop from "../components/content/backTop/BackTop";


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
      if (this.$refs.detailscroll){
        this.$refs.detailscroll.scrollTo(0, 0)
      }else if (this.$refs.scroll){
        this.$refs.scroll.scrollTo(0, 0)
      }
    },
  }
}