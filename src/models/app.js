import router from 'umi/router'
import * as users from '../service/user'
import { stringify } from 'qs'

/* global window */

export default{
    namespace:'app',
    state:{
        user:{},
        permissions:{
            visit:[]
        },
        routeList:[
            {
                id:'1',
                icon:'laptop',
                name:'Dashboard',
                zhName:'主界面',
                router:'/home'
            }
        ],
        locationPathname:'',
        locationQuery:{}
    },

    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen(location => {
                console.log('setupHistory')
                    dispatch({
                        type: 'updateState',
                        payload: {
                            locationPathname: location.pathname,
                            locationQuery: location.query,
                        },
                    })
            });
        },
        setupRequestCancel({history}){
            console.log('setupHistory Cancel')
            history.listen(()=>{
                const { cancelRequest=new Map()}=window
                cancelRequest.forEach((value,key) => {
                    if(value.pathname!==window.location.pathname){
                        value.cancel('cancel request')
                        cancelRequest.delete(key)
                    }
                });
            })
        },
        setup({dispatch}){
            console.log('setup')
            dispatch({type:'query'})
        }
    },

    effects:{
        *query({payload},{call,put,select}){
            console.log('sdasfsafsafsfgsagsag')
            const { success, user } = yield call(users.query, payload)
            console.log(user)
            console.log(success)
            const { locationPathname } = yield select(_ => _.app)
            if(success && user){ 
                console.log('if')
                yield put({
                    type: 'updateState',
                    payload: {
                      user,
                    },
                  })
                if ('/'== window.location.pathname) {
                    router.push({
                      pathname: '/home',
                    })
                  }
            }
            else{
                console.log('else')
                router.push({
                    pathname: '/',
                    search: stringify({
                      from: locationPathname,
                    })
                })
                
            }
        }
    },

    reducers: {
        updateState(state,{payload}){
            return{
                ...state,
                ...payload
            }
        }
    }


}