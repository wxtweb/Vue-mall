<template>
  <div id="detail" >
    <DetailNavBar></DetailNavBar>
    <detail-goods-tab class="tabControl"
                      v-show="isTabFixed"
                      ref="goodsTab1"
                      :titles="['商品','详情','评价','推荐']"
                      @tabItemClick="tabItemClick"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
<!--      <div>{{$store.state.cartList}}</div>-->
      <detail-swiper :item-info="itemInfo" @swiperImageLoad="swiperImageLoad"/>
      <detail-base-info :infoItem="itemInfo"/>
      <detail-goods-desc :GoodsDesc="itemInfo"/>
      <detail-goods-tab ref="goodsTab2" :titles="['商品','详情','评价','推荐']"
                        @tabItemClick="tabItemClick"/>
      <detail-goods-details ref="details" :goodsDetial="itemInfo" @detailImageLoad="detailImageLoad"/>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
      <detail-goods-rec ref="recommends" :goodsRec="goodsRec"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>

</template>

<script>
  import DetailNavBar from 'views/detail/childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailGoodsDesc from './childComps/DetailGoodsDesc'
  import DetailGoodsTab from './childComps/DetailGoodsTab'
  import DetailGoodsDetails from './childComps/DetailGoodsDetails'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailGoodsRec from './childComps/DetailGoodsRec'
  import DetailBottomBar from './childComps/DetailBottomBar'

  // import  {getDetial, Goods, getRecommend} from "../../network/detail";
  // import {debounce} from "common/utils";
  import {itemListenerMixin, BackTopMixin} from 'common/mixin'

  import Scroll from 'components/common/scroll/Scroll'
  import {debounce} from "../../common/utils";
  // import {getDetial, Goods} from 'network/detail'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailGoodsDesc,
      Scroll,
      DetailGoodsTab,
      DetailGoodsDetails,
      DetailCommentInfo,
      DetailGoodsRec,
      DetailBottomBar,

    },
    mixins: [itemListenerMixin, BackTopMixin],
    data() {
      return {
        id: null,
        tabOffsetTop: 0,
        isTabFixed: false,
        scrollToYs: [],
        getScrollToYs: null,
        itemInfo: [
          {
            images:[
              {
                link: '#',
                title: '焕新女装节',
                image: require('@/assets/img/detail/detailSwiper/detail_swiper_1.jpg')
              },
              {
                link: '#',
                title: '焕新女装节',
                image: require('@/assets/img/detail/detailSwiper/detail_swiper_2.jpg')
              },
              {
                link: '#',
                title: '焕新女装节',
                image: require('@/assets/img/detail/detailSwiper/detail_swiper_1.jpg')
              },
              {
                link: '#',
                title: '焕新女装节',
                image: require('@/assets/img/detail/detailSwiper/detail_swiper_2.jpg')
              }
            ],
            title: 'lativ诚衣 女装 秋冬连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019新款纯色拉绒长袖学生帽衫温暖舒适防风保暖',
            newPrice: 89.00 ,
            oldPrice: 99.00,
              desc: '适合学生的简装风格',
            sales: 53,
            collect: 9,
            themeDesc: '精选',
            themeBgColor: '#e62828',
            discountDesc: '活动价',
            discountBgColor: '#e62828',
            sourceAuthor: 'wxt',
            sourceStore: '京东',
            GoodsDesc: {
              title:'柔嫩舒适',
              desc1: 'TOREAD 探路者 TAMH91933 男款抓绒裤，采用双刷双摇抓绒面料，通过特殊工艺提高了面料的挺阔度，使得成衣保暖有型。拉链侧袋，储物安全。面料加入抗静电功能整理，避免秋冬季干燥气候下静电烦恼。',
              desc2: '腰部松紧，可调节。当当该单品现售价99元包邮，有需要的值友可入。',
            },
            list:[
              require('@/assets/img/detail/detailSwiper/detail_swiper_2.jpg'),
              require('@/assets/img/detail/detailSwiper/detail_swiper_2.jpg'),
              require('@/assets/img/detail/detailSwiper/detail_swiper_2.jpg'),
              require('@/assets/img/detail/detailSwiper/detail_swiper_2.jpg'),
              require('@/assets/img/detail/detailSwiper/detail_swiper_2.jpg'),
              require('@/assets/img/detail/detailSwiper/detail_swiper_2.jpg'),

            ]

          }
        ],
        goodsRec: {
          recommend: {
            page: 0,
            list: [
              {
                id: '8ml0',
                image:require('@/assets/img/goods/recommend/1.jpg'),
                title: 'lativ诚衣 女装 秋冬连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019新款纯色拉绒长袖学生帽衫温暖舒适防风保暖',
                price: 89.00 ,
                cfav: 9
              },
              {
                id: '83tgq',
                image:require('@/assets/img/goods/recommend/2.jpg'),
                title: 'lativ诚衣 女装 法兰绒纯棉格子衬杉女士2019秋季复古女长袖衬衣',
                price: 79.00 ,
                cfav: 74
              },
              {
                id: '8wrtc',
                image:require('@/assets/img/goods/recommend/3.jpg'),
                title: 'llativ诚衣 女装 秋冬休闲温暖舒适防风保暖长裤',
                price: 119.00 ,
                cfav: 21
              }
              ,
              {
                id: '3qt0',
                image:require('@/assets/img/goods/recommend/4.jpg'),
                title: 'lativ诚衣 女装 加绒圆领长袖卫衣秋装纯色百搭基础款卫衣',
                price: 99.00 ,
                cfav: 6
              }
              ,
              {
                id: 'klhr',
                image:require('@/assets/img/goods/recommend/5.jpg'),
                title: 'lativ诚衣 女装 秋冬休闲摇粒绒抓绒条纹睡衣家居服套装两件套',
                price: 29.00 ,
                cfav: 123
              }
              ,
              {
                id: 'bnmr',
                image:require('@/assets/img/goods/recommend/6.jpg'),
                title: 'lativ诚衣 女装 加绒圆领长袖卫衣秋装纯色百搭基础款卫衣',
                price: 89.00 ,
                cfav: 16
              },
              {
                id: '8ml0',
                image:require('@/assets/img/goods/recommend/1.jpg'),
                title: 'lativ诚衣 女装 秋冬连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019连帽卫衣2019新款纯色拉绒长袖学生连帽卫衣2019新款纯色拉绒长袖学生帽衫温暖舒适防风保暖',
                price: 89.00 ,
                cfav: 9
              },
              {
                id: '83tgq',
                image:require('@/assets/img/goods/recommend/2.jpg'),
                title: 'lativ诚衣 女装 法兰绒纯棉格子衬杉女士2019秋季复古女长袖衬衣',
                price: 79.00 ,
                cfav: 74
              },
              {
                id: '8wrtc',
                image:require('@/assets/img/goods/recommend/3.jpg'),
                title: 'llativ诚衣 女装 秋冬休闲温暖舒适防风保暖长裤',
                price: 119.00 ,
                cfav: 21
              }
              ,
              {
                id: '3qt0',
                image:require('@/assets/img/goods/recommend/4.jpg'),
                title: 'lativ诚衣 女装 加绒圆领长袖卫衣秋装纯色百搭基础款卫衣',
                price: 99.00 ,
                cfav: 6
              }
              ,
              {
                id: 'klhr',
                image:require('@/assets/img/goods/recommend/5.jpg'),
                title: 'lativ诚衣 女装 秋冬休闲摇粒绒抓绒条纹睡衣家居服套装两件套',
                price: 29.00 ,
                cfav: 123
              }
              ,
              {
                id: 'bnmr',
                image:require('@/assets/img/goods/recommend/6.jpg'),
                title: 'lativ诚衣 女装 加绒圆领长袖卫衣秋装纯色百搭基础款卫衣',
                price: 89.00 ,
                cfav: 16
              },
            ],
          },
          attention: {
            page: 0,
            list: [
              {
                id: '0kow',
                image:require('@/assets/img/goods/attention/1.jpg'),
                title: 'lativ诚衣2019新款纯色拉绒长袖学生帽衫温暖舒适防风保暖',
                price: 55.00 ,
                cfav: 8
              },
              {
                id: 'neaz',
                image:require('@/assets/img/goods/attention/2.jpg'),
                title: 'lativ诚衣 女装 休闲史努比IP上衣拉绒圆领长袖卫衣',
                price: 79.00 ,
                cfav: 74
              },
              {
                id: 'dsar',
                image:require('@/assets/img/goods/attention/3.jpg'),
                title: 'lativ诚衣 女装 迪士尼公主纯棉短袖印花上衣T恤',
                price: 99.00 ,
                cfav: 21
              }
              ,
              {
                id: 'wqtd',
                image:require('@/assets/img/goods/attention/4.jpg'),
                title: 'lativ诚衣 女装 帅气有型牛仔丹宁茄克外套(水洗产品)',
                price: 85.00 ,
                cfav: 856
              }
              ,
              {
                id: 'vhe5',
                image:require('@/assets/img/goods/attention/5.jpg'),
                title: 'lativ诚衣 女装 秋冬休闲摇粒绒抓绒条纹睡衣家居服套装两件套',
                price: 33.00 ,
                cfav: 63
              }
              ,
              {
                id: 'fg3c',
                image:require('@/assets/img/goods/attention/6.jpg'),
                title: 'lativ诚衣 女装 夏季凉感丝滑吊带内搭背心',
                price: 45.00 ,
                cfav: 13
              },
              {
                id: '0kow',
                image:require('@/assets/img/goods/attention/1.jpg'),
                title: 'lativ诚衣2019新款纯色拉绒长袖学生帽衫温暖舒适防风保暖',
                price: 55.00 ,
                cfav: 8
              },
              {
                id: 'neaz',
                image:require('@/assets/img/goods/attention/2.jpg'),
                title: 'lativ诚衣 女装 休闲史努比IP上衣拉绒圆领长袖卫衣',
                price: 79.00 ,
                cfav: 74
              },
              {
                id: 'dsar',
                image:require('@/assets/img/goods/attention/3.jpg'),
                title: 'lativ诚衣 女装 迪士尼公主纯棉短袖印花上衣T恤',
                price: 99.00 ,
                cfav: 21
              }
              ,
              {
                id: 'wqtd',
                image:require('@/assets/img/goods/attention/4.jpg'),
                title: 'lativ诚衣 女装 帅气有型牛仔丹宁茄克外套(水洗产品)',
                price: 85.00 ,
                cfav: 856
              }
              ,
              {
                id: 'vhe5',
                image:require('@/assets/img/goods/attention/5.jpg'),
                title: 'lativ诚衣 女装 秋冬休闲摇粒绒抓绒条纹睡衣家居服套装两件套',
                price: 33.00 ,
                cfav: 63
              }
              ,
              {
                id: 'fg3c',
                image:require('@/assets/img/goods/attention/6.jpg'),
                title: 'lativ诚衣 女装 夏季凉感丝滑吊带内搭背心',
                price: 45.00 ,
                cfav: 13
              },
            ]
          }
        },
        currentIndex:0,
        commentInfo:{
          user: {
            avata:require('assets/img/detail/detailComment/user/us-1.jpg'),
            uname:'莹飞和扬'
          },
          content:'很薄，绣花很精致，袖子很长，买的170，手都伸不出来，买来配汉尚的锦宫，简直绝配',
          created: '1347120000000',
          style: 'M',
          images:[
            require('assets/img/detail/detailComment/user/us-2.jpg'),
            require('assets/img/detail/detailComment/user/us-3.jpg'),

          ],

        },
      }
    },
    methods: {
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.goodsTab2.$el.offsetTop
        console.log(this.tabOffsetTop);
      },
      detailImageLoad () {
        // this.$refs.scroll.refresh()
        this.newRefresh()
        this.getScrollToYs()

      },
      contentScroll(position) {
        // console.log(position.y);
          this.isShowBackTop = (-position.y) > 200
        Number.MAX_VALUE
        this.isTabFixed = (-position.y) > this.tabOffsetTop
        const positionY = -position.y;
        let length = this.scrollToYs.length;
        for (let i = 0; i < length-1; i++) {
          /*if (this.currentIndex !== i && (i < length -1 && positionY >= this.scrollToYs[i]
            && positionY < this.scrollToYs[i+1] || (i === length - 1 && positionY >= this.scrollToYs[i]))) {
            this.currentIndex = i;
            this.$refs.goodsTab1.currentIndex = this.currentIndex;
          }*/
          if(this.currentIndex !== i && (positionY >= this.scrollToYs[i] && positionY < this.scrollToYs[i+1])){
            this.currentIndex = i;
            this.$refs.goodsTab1.currentIndex = this.currentIndex;
          }
        }
      },
      tabItemClick(index) {
        this.$refs.goodsTab1.currentIndex = index
        this.$refs.goodsTab2.currentIndex = index
        console.log(index);
        this.$refs.scroll.scrollTo(0,-this.scrollToYs[index],100)
      },
        addToCart() {
          const product = {}
          product.image = this.itemInfo[0].images.image
          product.title = this.itemInfo[0].title
          product.desc = this.itemInfo[0].desc
          product.newprice = this.itemInfo[0].newPrice
          product.oldPrice = this.itemInfo[0].oldPrice
          product.id = this.id

          // this.$store.commit('addCart', product)
          this.$store.dispatch('addCart', product)
        }
    },
    created() {
      this.id = this.$route.query.id
      /*getDetial(this.id).then(res => {
        this.topImages = res.result.itemInfo
        this.goods = new Goods(res.result)
      })*/
      /*this.$nextTick(() => {

      })*/
      this.getScrollToYs = debounce(() => {
        this.scrollToYs = []
        this.scrollToYs.push(0);
        this.scrollToYs.push(this.$refs.details.$el.offsetTop);
        this.scrollToYs.push(this.$refs.comment.$el.offsetTop);
        this.scrollToYs.push(this.$refs.recommends.$el.offsetTop);
        this.scrollToYs.push(Number.MAX_VALUE);
        // console.log(this.scrollToYs);
      })
    },

    mounted() {

      //混入
      /*mounted() {
        let newRefresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImageListener = () => {
          newRefresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImageListener)
      }*/
      // this.tabOffsetTop = this.$refs.goodsTab.$el.offsetTop
      // console.log(this.$refs.goodsTab.$el.offsetTop);
    },
    updated() {

    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImageListener)
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
  .content {
    height: calc(100% - 93px);
    overflow: hidden;
  }
  /*.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 100px;
  }*/
  .tabControl {
    position: relative;
    z-index: 99999999999999;
  }
</style>
