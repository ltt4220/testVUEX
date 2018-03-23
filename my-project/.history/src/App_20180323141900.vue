<template>
  <div id="app">
   <a href="javascript:;" @click="addClick()">点击</a>
   <p v-show="aa">5464654</p>
   <!-- route-link定义点击后导航到哪个路径下 -->
   <header>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
   </header>
   <!-- 对应的组件内容渲染到 -->
   <router-view></router-view>
   <t-dialog></t-dialog>
  </div>
</template>
<script>
import dialog from './components/dialog.vue'
export default {
  components:{
    "t-dialog":dialog
  },
  data:function(){
    return {
      bb: this.$store.getters.not_show
    }
  },
  computed:{
    aa:function(){
      return this.$store.getters.not_show
    }
  },
  methods:{
    addClick:function(){
      this.$store.commit('switch_dialog')//直接调用mutation中的方法;
      _this.$store.dispatch('switch_dialog')//间接通过actions对象调用mutation中的方法;
    }
  }
}
</script>