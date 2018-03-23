import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import dialog_store from '../components/dia'
export default new vuex.Store({
    state:{
        show:false
    }
})