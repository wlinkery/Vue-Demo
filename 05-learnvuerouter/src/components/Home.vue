<template>
  <div>
    <h2>我是首页</h2>
    <p>哈哈哈</p>
    <router-link to="/Home/news">新闻</router-link>
    <router-link to="/Home/message">消息</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
   return{
     message:'你好',
     path:'/home/news'
   }

  },
  // created() {
  //   console.log('created');
  //   document.title='首页'
  // },
  // mounted() {
  //   console.log('mounted');
  // },
  // updated() {
  //   console.log('updated');
  // }
  created() {
    console.log('created');
    // this.$router.push('/home/news')
  },
  destroyed() {
    console.log('destroyed')
  },
  activated() {
    console.log('actived');
    this.$router.push('/home/news')
  },

  deactivated() {
    console.log('deactived');
    // this.path=this.$route.path;

  },
  beforeRouteLeave(to,from,next){
    this.path=this.$route.path;
    next()
  }

}
</script>

<style scoped>

</style>
