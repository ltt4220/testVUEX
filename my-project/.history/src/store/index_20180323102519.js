import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import dialog_store from '../components/dialog_s'
export default new vuex.Store({
    state:{
        show:false
    }
})