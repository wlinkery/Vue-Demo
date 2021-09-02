import Vue from "vue";
import {
  INCREMENT
} from './mutations-type'
export  default {
  ['tes'](){

  },
  //方法
  ['INCREMENT'](state){
    state.counter++
  },
  decrement(state){
    state.counter--
  },
  //1.普通的提交封装
  incrementCount(state,count){
    state.counter += count
  },
  //2.特殊的提交封装
  // incrementCount(state,payload){
  //   state.counter += payload.count
  // },
  addStudent(state,stu){
    state.students.push(stu)
  },
  updateInfo(state){
    // state.info.name='codewhy'
    // state.info['address']='洛杉矶'
    Vue.set(state.info,'address','洛杉矶')
    // delete state.info.age
    Vue.delete(state.info,'age')
    //错误代码，不能在这里进行异步操作
    // setTimeout(()=>{
    //   state.info.name="codewhy"
    // },1000)
  }
}
