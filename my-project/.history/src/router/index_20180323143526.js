import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

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
  },
  //重定向
  {
      path:'/',
      redirect:"/home"
  }
  ]
})
