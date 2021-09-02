<template>
<div>
  <h2>我是用户页面</h2>
  <p>我是用户的内容</p>
  <p>{{userId}}</p>
  <h2>{{$route.params.userId}}</h2>
  <button @click="btnClick">按钮</button>
</div>
</template>

<script>
export default {
  name: "User",
  data(){
    return {
      message:'aaaaa'
    }
  },
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  methods:{
    btnClick(){
      console.log(this.$router);
      console.log(this.$route);
    }
  }
}
</script>

<style scoped>

</style>
