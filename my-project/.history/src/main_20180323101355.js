// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
Vue.config.productionTip = false//设置为false 以阻止vue在启动时生成生产提示;
var store = new vuex.Store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
