// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
const cpn={
  template:'<div>{{message}}</div>',
  data(){
    return{
      message:'我是组件message'
    }
  }
}
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'

  render:function (createElement){
    //1.普通用法：createElement('标签'，{标签的属性},[''])
    // return aaa
    // return createElement('h2',
    //   {class:'box'},
    //   ['Helloworld',createElement('button',['按钮'])])
  //2.传入一个组件对象
    return createElement(App)
  }
})

// function sum (num2, num1) {
//   return num1 + num2
// }
//
// console.log(sum(20, 30))

//runtime--compiler（v1)
// template -> ast -> render ->vdom ->UI
//runtime-only(1.性能更高 2.下面的代码量更少）
//render -> vdom ->UI
