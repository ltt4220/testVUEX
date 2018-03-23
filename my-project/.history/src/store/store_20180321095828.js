import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      count: 10222222222
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })