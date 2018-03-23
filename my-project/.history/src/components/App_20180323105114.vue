<template>
  <div id="app">
   <a href="javascript:;" @click="$store.commit('switch_dialog')">点击</a>
   <t-dialog></t-dialog>
  </div>
</template>

<script>
import dialog from './components/dialog.vue'
export default {
  components:{
    "t-dialog":
  }
}
</script>