// axios 二次封装
import axios from 'axios'

const service = axios.create({
    baseURL: '',
    timeout: 5000
})

service.interceptors.request.use(config => {

    return config
})


service.interceptors.response.use(res => {


    return res.data;
}, err => {
    return Promise.reject(err)
})

export default service