<template>
<div>
<h2>我是Profile</h2>
  <P>我是Profilede的内容</P>
  <p>{{$route.query.name}}</p>
</div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
