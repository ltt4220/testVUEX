import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      count: 3,
      todos: [
        { id: 1, text: '完成', done: true },
        { id: 2, text: '未完成', done: false }
      ]
    },
    mutations: {
      hgj (state,n) {
        return state.count+=n
      }
    },
    getters: {
        doneTodos: state => {
          return state.todos.filter(todo => todo.done)
        }
      }
  })