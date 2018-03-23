<template>
  <div id="app">
   <a href="javascript:;" @click="$store.commit('switch_dialog')">点击</a>
   <p>5464654</p>
</template>

<script>
import dialog from './components/dialog.vue'
export default {
  components:{
    "t-dialog":dialog
  }
}
</script>