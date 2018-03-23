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
      obj1:{num:12},
      hovercolor1:'rgb(255,3,11)'
    },
    mutations: {
      click1:function(state){
        // console.log("click1")
        state.count++
        setTimeout(function(){
            console.log("click1")
            console.log(state.count)
        },10)
      },
      click2 (state,n) {
        console.log("click2")
        console.log(state.count)
        return state.count
      },
    },
    actions: {
        increment (context,n) {
            context.commit('click2')
        },
        cl1(context){
            setTimeout(function(){
                context.commit('click1')
            },10)
            
        }
    },
    getters: {
        doneTodos: state => {
          return state.todos.filter(todo => todo.done)
        },
        getCount:state =>{
            return state.count*11
        }
      }
  })