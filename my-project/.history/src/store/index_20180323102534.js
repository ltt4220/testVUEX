import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import dialog_store from '../components/dialog_store.js';//引入
export default new vuex.Store({
    state:{
        show:false
    }
})