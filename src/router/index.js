import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/Home')
const Cheap = () => import('views/cheap/Cheap')
const Community = () => import('views/community/Community')
const Cart = () => import('views/Cart/Cart')
const ProFile = () => import('views/profile/ProFile')
const Detail = () => import('views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  }
  ,
  {
    path: '/cheap',
    component: Cheap,
  }
  ,
  {
    path: '/community',
    component: Community,
  }
  ,
  {
    path: '/cart',
    component: Cart,
  }
  ,
  {
    path: '/profile',
    component: ProFile,
  },
  {
    path: '/detail',
    component: Detail,
  }
]
const router = new VueRouter ({
  routes,
  mode: 'history'
})

export default router
