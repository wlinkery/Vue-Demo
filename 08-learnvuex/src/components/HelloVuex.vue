<template>
<div>
  <h2>{{$store.state.counter}}</h2>
  <h2>{{$store.getters.powerCounter}}</h2>
<!--  <p> {{more20stu}}</p>-->
  <p> {{$store.getters.more20stu}}</p>

</div>
</template>

<script>
export default {
  name: "HelloVuex",
  props:{
    counter:Number
  },
  // computed: {
  //   more20stu(){
  //     // return this.$store.state.students.filter(s=>{
  //     //   return s.age>=20
  //     // })
  //     return this.$store.state.students.filter(s=> s.age>=20)
  //   }
  // }
}
</script>

<style scoped>

</style>
