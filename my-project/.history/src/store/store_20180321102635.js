import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      count: 10222222222,
      todos: [
        { id: 1, text: '完成', done: true },
        { id: 2, text: '未完成', done: false }
      ]
    },
    mutations: {
      increment (state,n) {
        return state.count++
      }
    },
    getters: {
        doneTodos: state => {
          return state.todos.filter(todo => todo.done)
        }
      }
  })