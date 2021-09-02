export default {
  // aUpdateInfo(context,payload){
  //   setTimeout(()=>{
  //     context.commit('updateInfo')
  //     console.log(payload.message);
  //     payload.success()
  //     console.log(payload);
  //   },1000)
  // }
  aUpdateInfo(context,payload){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        context.commit('updateInfo')
        console.log(payload);
        resolve('成功')
      },1000)
    })
  }
}
