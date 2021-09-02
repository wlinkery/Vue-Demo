<template>
<p>{{categorys}}</p>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data(){
    return {
      categorys:''
    }
  },

  created() {
    axios({
      url:'http://123.207.32.32:8000/category'
    }).then(res=>{
      this.categorys=res
    })
  }
}
</script>

<style scoped>

</style>
