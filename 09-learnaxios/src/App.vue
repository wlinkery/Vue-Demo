<template>
  <div id="app">
    <h3>………………APP……………………</h3>
    <p>{{result}}</p>
    <h3>………………Hello World……………………</h3>
    <hello-world></hello-world>
  </div>
</template>

<script>

import HelloWorld from "./components/HelloWorld";
import axios from "axios";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      result:''
    }
  },

  created() {
    axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(res=>{
      this.result=res
    })
  }
}
</script>

<style>

</style>
