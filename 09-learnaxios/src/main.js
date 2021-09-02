import Vue from 'vue'
import App from './App'
import axios from "axios";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   // method:'get'
//   // method:'post'
//
// }).then(res=>{
//   console.log(res);
// })
//
// //1、基本使用
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
//   // method:'get'
//   // method:'post'
//
// }).then(res=>{
//   console.log(res);
// })
//
// // axios.get()
// // axios.post()
//
//
//3、使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000
//
// //2、axios发送并发请求
// axios.all([axios({
// //  baseURL:'http://123.207.32.32:8000',
//   url:'/home/multidata',
//   // timeout: 5
// }),axios({
//   // baseURL:'http://123.207.32.32:8000',
//   url:'/home/data',
//   // timeout: 5,
//   params:{
//     type:'pop',
//     page:4
//   }
// })])
//   .then(axios.spread((res1, res2)=> {
//       console.log(res1);
//       console.log(res2);
//
//
//   }))
// // .then(result=> {
// //   console.log(result);
// //   console.log(result[0]);
// //   console.log(result[1]);
//
// // })
// const obj  = {
//   name:'kebe',
//   age:30
// }
// // const {name,age}=obj;
// const names=['why','kobe','janes']
// const [name1,name2,name3]=names
//
// axios({
//   url:'/category'
// })

//4、创建对应的axios的实例
// const instance1=axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })
//
// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })
//
// const instance2=axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
//   // headers:{}
// })

//5、封装request模块
import {request} from "./network/request";

// request({
//   url:'/home/multidata',
// },res=>{
//   console.log(res);
// },err=>{
//   console.log(err);
// })




// request({
//   baseConfig:{
//
//   },
//   success:function(res){
//
//   },
//   failure:function(err){
//
//   }
// })

request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})


