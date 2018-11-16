import request from '../utils/request'


export function center(auth){
    return request('/v1.0/center',{
        headers:{
            'content-type': 'application/json'
        },
        method:'GET'
    })
}

export function query(id){
    if (id==null){
        id=0
    }
    return request('/v1.0/user/'+id,{
        headers:{
            'content-type': 'application/json'
        },
        method:'GET'
    })
}