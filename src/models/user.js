
import * as user from '../service/user'
import router from 'umi/router'

export default {
  namespace: 'user',

  state: {
    visible:false
  },

  effects: {
    *center({ payload }, {put, call}) {
      console.log('center')
    try{
      const data = yield call(user.center, payload)
      console.log(data)
      router.push('/login')
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
