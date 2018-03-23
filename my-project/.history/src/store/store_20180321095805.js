import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      count: 0000000000
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })