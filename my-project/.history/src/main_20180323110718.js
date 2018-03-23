// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './components/A'
Vue.config.productionTip = false;//设置为false以阻止在vue启动时生产提示代码;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  template: '<App/>',
  components: { App }
})
