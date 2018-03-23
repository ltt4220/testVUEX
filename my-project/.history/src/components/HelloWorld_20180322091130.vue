<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <div v-html="colorHover"></div>
    <ul class="ul2" >
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue{{count}}
        </a>
      </li>
    </ul>
    <div @click="click1(index)" v-for="(item,index) in list" id="item.id" :key="item.id">{{item.text}}</div>
  <my-component> </my-component>  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:this.$store.todos
    }
  },
  computed: {
    count () {
      return this.$store.getters.getCount
    },
    colorHover () {
      let color = this.$store.state.hovercolor1
      return `<style>
      .ul2>li:hover a{
        color:${color}
      }
      </style>`
    }
  },
  components:{
    'my-component':{
      template:"<div>我是子组件的子组件{{ee}}</div>",
      data:function(){
        return {
          c1:this.$store.getters.getCount
        }
      },
      computed:{
        ee(){
          return this.$store.getters.getCount
        }
      }
    }
  },
  methods:{
    click1:function(index){
      // this.$store.commit("click1")//直接调用
      // this.$store.dispatch('cl1')//间接调用
      this.$store.dispatch('increment',{num:index})
      console.log("this.$store.state.count: "+this.$store.state.count)
    }
  },
  beforeMount(){
    // console.log(this.$store.commit('hgj',{num:12}))
  },
  mounted:function(){
    this.list = this.$store.state.todos
    // console.log(this.$store.dispatch('increment'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
