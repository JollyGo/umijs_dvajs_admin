import request from '../utils/request'
import {Base64} from 'js-base64'


export function login(auth){
    return request('api/v1.0/login',{
        headers:{
            'content-type': 'application/json',
            'Authorization': 'Basic '+Base64.encode(auth.username+':'+auth.password)
        },
        method:'POST',
        body:JSON.stringify({ 
            'username':auth.username,
            'password':auth.password})
    })
}