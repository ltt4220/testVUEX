import Vue from 'vue';
import VueRouter from "vue-router";

//引入组件;
import home from "./home.vue";
import about from "./about.vue";

//要告诉vue 使用vueRouter
Vue.use(VueRouter);
const routes = [
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
    }
] 

var router = new VueRouter({
    routes
})
export default router;