import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

const Home=()=>import('../components/Home')
const About=()=>import('../components/About')
const User=()=>import('../components/User')
const HomeNews=()=>import('../components/HomeNews')
const HomeMessage=()=>import('../components/HomeMessage')
const Profile=()=>import('../components/Profile')

//1.通过Vue.use(插件),安装插件
Vue.use(Router)
//创建VueRouter对象\

const router= new Router({
  mode:'history',
  linkActiveClass:'active',
  //.配置路由和组件之间得应用关系
   routes: [

    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      redirect:'/home'//重定向

    },
    {
      path:'/home',
      component:Home,
      meta:{
        title:'首页'
      },
      children:[
        // {
        //   path:'',
        //   redirect:'message'
        // },
        {
          path:'news',
          component:HomeNews
        },
        {
          path:'message',
          component:HomeMessage
        }
      ]
    },
    {
      path:'/about',
      component:About,
      meta:{
        title:'关于'
      },
      beforeEnter:(to,from,next)=>{

        // console.log('beforeEnter');
        next();
      }
    },
    {
      path:'/user/:userId',
      component:User,
      meta:{
        title:'用户'
      },
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        title:'档案'
      },
    }
  ]

})
//前置钩子//前置守卫(guard)
router.beforeEach((to,from,next)=>{
  //从from跳转到to
  // document.title=to.meta.title
  document.title=to.matched[0].meta.title
  // console.log(to);
  // console.log("+++++");
  next()
})
//后置钩子（hook）
router.afterEach((to,from)=>{

  // console.log("----");
})
export default router




