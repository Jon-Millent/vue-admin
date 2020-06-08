
import axios from 'axios'
import Qs from 'qs'

axios.interceptors.request.use(
    config => {

        let token = window.localStorage.getItem('token') || ''
        let userId = window.localStorage.getItem('user_id') || ''

        if(config.method !== 'get') {

            config.data = config.data || ''

            if(config.data === '') {
                config.data += Qs.stringify({
                    token: token,
                    uid: userId
                })
            } else{
                config.data += ('&' + Qs.stringify({
                    token: token,
                    uid: userId
                }))
            }

        } else {
            config.params = config.params || {}
            config.params.token = token
            config.params.userId = userId
        }

        return config;

    },
    err => {
        return Promise.reject(err);
    }
);


class Api {
    constructor(baseUrl){
        this.baseUrl = baseUrl

        this.status = {
            success: 0,
            error: 1,
            reject: 2,
            timeout: 3
        }

    }

    isSuccess(code){
        return this.status.success === code
    }
    get(api, params){
        return axios.get(this.baseUrl + api, {
            params: params
        })
    }

    post(api, params){
        return axios.post(this.baseUrl + api, Qs.stringify(params), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
    }
}

export default {
    install(Vue){
        Vue.prototype.$api = new Api('')
    }
}

