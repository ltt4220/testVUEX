<template>
  <div id="app">
   <a href="javascript:;" @click="$store.dispatch('switch_dialog')">点击</a>
   <p v-show="aa">5464654</p>
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

    }
  }
}
</script>