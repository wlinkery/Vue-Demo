<template>
  <div id="app">


<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="button" replace >关于</router-link>
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-link :to="'/user/'+userId"   tag="button" replace>用户</router-link>
<!--   <img src="imgURL" alt="">-->
    <router-link :to="{path:'/profile',query:{name:'wang',age:12,sex:'女'}}" tag="button" replace>档案</router-link>
    <button @click="userClick">用户</button>
    <button @click="profileClick"> 档案</button>
<!--    <router-view/>-->
<!--    正则表达式不能加空格 \d[2,9]-->
    <keep-alive exclude="profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import About from "./components/About";
export default {
  name: 'App',
  components: {About},
  data(){
    return{
      userId:'list',
    }
  },
  methods:{
    homeClick(){
      //通过代码的方式修改路由vue-router
      this.$router.push('/home')
      console.log("homeClick");
    },
    aboutClick(){
      this.$router.push('/about')
      console.log("aboutClick");
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'kobe',
          age:21,
          sex:'男'
        }
      })
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*.router-link-active{*/
/*  color:#f00 ;*/
/*}*/
.active{
  color: red;
}
</style>
