<template>
  <div id="home">
    <home-nav-bar/>
    <scroll-tab :titles="['推荐','关注']" @tabClick="tabClick"/>
    <scroll class="content" ref="scroll" :probe-type="3"
            @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <category-item :categorys="categorys"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
    import HomeNavBar from 'views/home/childComps/HomeNavBar'
    import CategoryItem from 'components/common/categoryitem/CategoryItem'
    import ScrollTab from 'components/content/scrolltab/ScrollTab'
    import GoodsList from 'components/content/goods/GoodsList'

    import Scroll from 'components/common/scroll/Scroll'
    // import {getHomeMultidata, getHomeGoods} from 'network/home'
    // import {debounce} from "common/utils";
    import {itemListenerMixin, BackTopMixin} from 'common/mixin'
    import HomeSwiper from 'views/home/childComps/HomeSwiper'

    export default {
        name: "Home",
        components: {
          HomeNavBar,
          CategoryItem,
          ScrollTab,
          GoodsList,
          HomeSwiper,
          Scroll,
        },
        mixins: [itemListenerMixin, BackTopMixin],
        data() {
          return {
            banners: [
              {
                link: '#',
                title: '焕新女装节',
                image: require('@/assets/img/home/homeswiper/swiper_01.jpg')
              },
              {
                link: '#',
                title: '女神',
                image: require('@/assets/img/home/homeswiper/swiper_02.jpg')
              },
              {
                link: '#',
                title: '职场女士',
                image: require('@/assets/img/home/homeswiper/swiper_03.jpg')
              },
              {
                link: '#',
                title: '无印良品',
                image: require('@/assets/img/home/homeswiper/swiper_04.jpg')
              }
            ],
            // recommends: []
            categorys: [
              {
                link: '#',
                image: require('@/assets/img/home/homecategory/home_nav_qdfl.jpg'),
                title:'签到福利'
              },
              {
                link: '#',
                image: require('@/assets/img/home/homecategory/home_nav_phb.jpg'),
                title:'排行榜'
              },
              {
                link: '#',
                image: require('@/assets/img/home/homecategory/home_nav_yhrl.jpg'),
                title:'优惠日历'
              },
              {
                link: '#',
                image: require('@/assets/img/home/homecategory/home_nav_ht.jpg'),
                title:'海淘'
              },
              {
                link: '#',
                image: require('@/assets/img/home/homecategory/home_nav_0ysy.jpg'),
                title:'0元试用'
              },
              {
                link: '#',
                image: require('@/assets/img/home/homecategory/home_nav_bczq.jpg'),
                title:'白菜专区'
              },
              {
                link: '#',
                image: require('@/assets/img/home/homecategory/home_nav_yhq.jpg'),
                title:'优惠券'
              },
              {
                link: '#',
                image: require('@/assets/img/home/homecategory/home_nav_xp.jpg'),
                title:'新品'
              },
              {
                link: '#',
                image: require('@/assets/img/home/homecategory/home_nav_jxht.jpg'),
                title:'精选话题'
              },
              {
                link: '#',
                image: require('@/assets/img/home/homecategory/home_nav_fldh.jpg'),
                title:'分类导航'
              }
            ],
            goods: {
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
            currentType: 'recommend',

          }
        },
        computed: {
          showGoods() {
            return this.goods[this.currentType].list
          },
        },
        created() {
         /* this.getHomeMultidata();
          this.getHomeGoods(recommend);
          this.getHomeGoods(attention);*/
        },
        mounted() {
          //将refresh函数传入，且保存debounce函数的返回值
          /*const refresh = debounce(this.$refs.scroll.refresh, 300)
          this.$bus.$on('itemImageLoad', () => {
            // this.$refs.scroll.refresh()
            refresh()
          })*/

        },
        methods: {

          tabClick(index) {
            switch (index) {
              case 0:
                this.currentType = 'recommend'
                break
              case 1:
                this.currentType = 'attention'
                break
            }
          },
          contentScroll(position) {
            this.isShowBackTop = (-position.y) > 200
          },
          loadMore () {
            // this.getHomeGoods(this.currentType)
            console.log('上拉加载更多');
          },
          /*getHomeMultidata() {
            getHomeMultidata().then(res => {
              this.banners = res.data.banner
              this.recommends = res.data.recomend
            })
          },*/
        /*getHomeGoods(type) {
          const page = this.goods[type].page + 1
          getHomeGoods(type,page).then(res => {
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
            this.$ref.scroll.finishPullUp()
          })
          },*/

        }

      }


</script>
<style scoped>
  #home {
    height: 100vh;
    /*padding-top:88px;*/
    overflow: hidden;
    /*position: relative;*/
  }
  .content {
    /*margin-top: 89px;*/
    height: calc(100% - 144px);
    overflow: hidden;
   /* position: absolute;
    top: 89px;
    bottom: 143px;
    left: 0;
    right: 0;*/
  }
</style>
