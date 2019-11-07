import {debounce} from "./utils";
import BackTop from 'components/content/backtop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImageListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImageListener)
    console.log('我是混入内容');
  }
}

export const BackTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }

  },
  components: {
    BackTop,
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0,0)
    },

  }
}
