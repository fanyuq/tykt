import Axios from "axios";
import store from "@/store";
import QS from 'qs'
import router from "@/router";
import {Toast} from "vant";
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

Axios.interceptors.request.use(config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
    })

Axios.interceptors.response.use(response=>{
    if(response.status===200){
        if(response.data.errno===99990){
            Toast.fail(response.data.error);
            sessionStorage.removeItem('userInfo')
            sessionStorage.removeItem('token')
            store.state.userInfo = {}
            router.push('/login')
        }
        else {
            return Promise.resolve(response)
        }
    }
    else{
        return Promise.reject(response);
    }
},error => {
    if(error.response.status){
        const {response} = error
        if(response){
            Toast.fail(response.data.error);
            return Promise.reject(response)
        }
        else{
            Toast.error("暂时无法连接服务器，请稍后")
            return Promise.reject(response);
        }
    }
})

export function get(url, params) {
    store.commit('showLoading')//显示加载中
    return new Promise((resolve, reject) => {
        Axios.get(url, {
            params: params
        })
            .then(res => {
                store.commit('hideLoading')//关闭加载
                resolve(res.data);
            })
            .catch(err => {
                store.commit('hideLoading')//关闭加载
                reject(err.data)
            })
    });
}

export function post(url, params) {
    store.commit('showLoading')//显示加载中
    return new Promise((resolve, reject) => {
        Axios.post(url, QS.stringify(params))
            .then(res => {
                store.commit('hideLoading')//关闭加载
                resolve(res.data);
            })
            .catch(err => {
                store.commit('hideLoading')//关闭加载
                reject(err.data)
            })
    });
}

