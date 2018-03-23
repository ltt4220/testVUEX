<template>
  <div id="app">
   <a href="javascript:;" @click="$store.commit('switch_dialog')">点击</a>
   <p v-show="bb">5464654</p>
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
      bb:this.$store.state.show
    }
  },
  computed:
}
</script>