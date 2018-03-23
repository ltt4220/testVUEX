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
      count2:3,
      obj1:{num:12}
    },
    mutations: {
      hgj (state,n) {
        console.log(state.count)
        return state.count+=state.obj1.num
      },
      click1:function(state){
        console.log(++state.count2)
      }
    },
    actions: {
        increment (context) {
            context.commit('hgj') 
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