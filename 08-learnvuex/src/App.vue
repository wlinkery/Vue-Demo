<template>
  <div id="app">
 <h2>………………App内容…………………</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+1</button>
    <button @click="subtraction">-1</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>………………App内容:getters相关信息…………………</h2>
    <h2>{{$store.getters.powerCounter}}</h2>

<!--    <h3>{{more20stu}}</h3>-->
    <p>{{$store.getters.more20stu}}</p>
    <h2>{{$store.getters.more20stulength}}</h2>
    <p>{{$store.getters.moreAgeStu(18)}}</p>

    <h2>………………App内容:moduleA的相关信息…………………</h2>
    <P>{{$store.state.a.name}}</P>
    <button @click="updateName">修改名字</button>
    <p>{{$store.getters.fullname}}</p>
    <p>{{$store.getters.fullname1}}</p>
    <p>{{$store.getters.fullname2}}</p>
    <button @click="aUpdateName">异步修改名字</button>


    <h2>…………App内容:info对象的内容是否是响应式的……………</h2>
    <p>{{$store.state.info}}</p>
    <button @click="updateInfo">修改信息</button>

    <h2>………………Hello Vuex内容………………</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
// import INCREMENT from
import {
  INCREMENT
} from './store/mutations-type'

export default {
  name: 'App',
  data(){
    return{
      message:'我是App组件'
    }
  },
  components: {
    HelloVuex
  },
  methods:{
    addition(){
      this.$store.commit('INCREMENT')
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      //payload :负载
      //1，普通的提交封装
      this.$store.commit('incrementCount',count)

      //2,特殊的提交封装
      // this.Store.commit({
      //   type:'incrementCount',
      //   count
      // })
    },
    addStudent(){
      const stu={id:114,name:'alan',age:37}
      this.$store.commit('addStudent',stu)
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo','我是payload')

      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是携带的信息',
      //   success:()=>{
      //     console.log('里面已经完成');
      //   }
      // }

      this.$store.dispatch('aUpdateInfo','我是携带的信息').then(res=>{
        console.log('里面完成了提交');
        console.log(res);
      })
    },
    updateName(){
      this.$store.commit('updateName','list')
    },
    aUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  },
  // computed: {
  //   more20stu(){
  //     // return this.$store.state.students.filter(s=>{
  //     //   return s.age>=20
  //     // })
  //     return this.$store.state.students.filter(s=> s.age>=20)
  //   }
  // }
}


</script>

<style>
</style>
