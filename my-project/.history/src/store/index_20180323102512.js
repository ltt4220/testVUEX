import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import dialog_store from '../components/'
export default new vuex.Store({
    state:{
        show:false
    }
})