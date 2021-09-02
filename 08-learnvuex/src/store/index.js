import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations-type'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
//1.安装插件

Vue.use(Vuex)

//2.创建对象
// const moduleA = {
  // state:{
  //   name:'wangyan'
  // },
  // mutations:{
  //   updateName(state,payload){
  //     state.name="WWWWWW"
  //   }
  // },
  // actions:{
  //   aUpdateName(context) {
  //   setTimeout(()=>{
  //     context.commit('updateName','hhhhhhhh')
  //   },1000)
  //   }
  // },
  // getters:{
  //   fullname(state){
  //     return state.name+'1111'
  //   },
  //   fullname1(state,getters){
  //     return getters.fullname+'22222'
  //   },
  //   fullname2(state,getters,rootState){
  //     return getters.fullname1+rootState.counter
  //   }
  // }
// }

const state={
  counter:100,
  students:[
    {id:110,name:'why1',age:19},
    {id:111,name:'why2',age:23},
    {id:112,name:'why3',age:30},
    {id:113,name:'why3',age:8}

  ],
  info:{
    name:'wang', //Dep->[Watcher]
    age:20,      //Dep->[Watcher]
    height: 1.98    //Dep->[Watcher]
  }
}

const store=new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  // state:{
  //   // counter:100,
  //   // students:[
  //   //   {id:110,name:'why1',age:19},
  //   //   {id:111,name:'why2',age:23},
  //   //   {id:112,name:'why3',age:30},
  //   //   {id:113,name:'why3',age:8}
  //   //
  //   // ],
  //   // info:{
  //   //   name:'wang', //Dep->[Watcher]
  //   //   age:20,      //Dep->[Watcher]
  //   //   height: 1.98    //Dep->[Watcher]
  //   // }
  // },
  // mutations:{
  //   // ['tes'](){
  //   //
  //   // },
  //   // //方法
  //   // ['INCREMENT'](state){
  //   //   state.counter++
  //   // },
  //   // decrement(state){
  //   //   state.counter--
  //   // },
  //   // //1.普通的提交封装
  //   // incrementCount(state,count){
  //   //   state.counter += count
  //   // },
  //   // //2.特殊的提交封装
  //   // // incrementCount(state,payload){
  //   // //   state.counter += payload.count
  //   // // },
  //   // addStudent(state,stu){
  //   //   state.students.push(stu)
  //   // },
  //   // updateInfo(state){
  //   //   // state.info.name='codewhy'
  //   //   // state.info['address']='洛杉矶'
  //   //   Vue.set(state.info,'address','洛杉矶')
  //   //   // delete state.info.age
  //   //   Vue.delete(state.info,'age')
  //   //   //错误代码，不能在这里进行异步操作
  //   //   // setTimeout(()=>{
  //   //   //   state.info.name="codewhy"
  //   //   // },1000)
  //   // }
  //   },
  // actions:{
  //   // // aUpdateInfo(context,payload){
  //   // //   setTimeout(()=>{
  //   // //     context.commit('updateInfo')
  //   // //     console.log(payload.message);
  //   // //     payload.success()
  //   // //     console.log(payload);
  //   // //   },1000)
  //   // // }
  //   // aUpdateInfo(context,payload){
  //   //   return new Promise((resolve,reject)=>{
  //   //     setTimeout(()=>{
  //   //       context.commit('updateInfo')
  //   //       console.log(payload);
  //   //       resolve('成功')
  //   //     },1000)
  //   //   })
  //   // }
  // },
  // getters:{
  //   // powerCounter(state){
  //   //  return  state.counter*state.counter
  //   // },
  //   // more20stu(state){
  //   //       return state.students.filter(s=> s.age>=20)
  //   //     },
  //   // more20stulength(state,getters){
  //   //   return getters.more20stu.length
  //   // },
  //   // moreAgeStu(state){
  //   //   // return function (age){
  //   //   //   return state.students.filter(s=> s.age>age)
  //   //   // }
  //   //   return age=>{
  //   //     return state.students.filter(s=> s.age>age)
  //   //   }
  //   // }
  // },
  modules:{
    a:moduleA
  }
})

//3.导出store对象
export default store

//对象的解构
const obj={
  name:'why',
  age:18,
  height: 1.88,
  address:'洛杉矶'
}
const {name,age,height}=obj;
