import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.use(toast)
Vue.use(VueLazyLoad, {
  loading: require('')
})

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
