import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//引入组件;
import home from "../home.vue";
import about from "..//about.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/home",
      component:home
  },
  {
      path:"./about",
      component:about
  }
  ]
})
