import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      count: 10222222222,
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    getters: {
        doneTodos: state => {
          return state.todos.filter(todo => todo.done)
        }
      }
  })