import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      count: 1,
      todos: [
        { id: 1, text: '完成', done: true },
        { id: 2, text: '未完成', done: false }
      ],
      count2:3
    },
    mutations: {
      hgj (state,n) {
        return state.count+=n.num
      },
      click1:function(state){
        console.log(++state.count2)
      }
    },
    actions: {
        increment (context,n) {
         console.log(context.commit('hgj',n)) 
        },
        cl1(context){
            context.commit('click1')
        }
    },
    getters: {
        doneTodos: state => {
          return state.todos.filter(todo => todo.done)
        },
        
      }
  })