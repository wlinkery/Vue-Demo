export default {
  state:{
    name:'wangyan'
  },
  mutations:{
    updateName(state,payload){
      state.name="WWWWWW"
    }
  },
  actions:{
    aUpdateName(context) {
      setTimeout(()=>{
        context.commit('updateName','hhhhhhhh')
      },1000)
    }
  },
  getters:{
    fullname(state){
      return state.name+'1111'
    },
    fullname1(state,getters){
      return getters.fullname+'22222'
    },
    fullname2(state,getters,rootState){
      return getters.fullname1+rootState.counter
    }
  }
}
