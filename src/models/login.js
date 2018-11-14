import * as login from '../service/login'
import router from 'umi/router'

export default {
  namespace: 'login',

  state: {
    visible:false
  },

  effects: {
    *login({ payload }, {put, call}) {
      console.log('login')
    try{
      const data = yield call(login.login, payload)
      router.push('/home')
    }catch(e){
      console.log(e)
      yield put({type:'unAuth'})
    }
    },
  },

  reducers:{
    unAuth(state){
      return{...state,
        visible:true
      }
    },
    errorClose(state){
      console.log(state)
      return{...state,
        visible:false
      }
    }
  }
}
