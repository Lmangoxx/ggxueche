import axios from 'axios'
import Qs from 'qs'

// 创建axios实例
const service = axios.create({
	baseURL: process.env.BASE_URL,
	// #config里面有这个transformRquest，这个选项会在发送参数前进行处理。
	// #这时候我们通过Qs.stringify转换为表单查询参数
    transformRequest: [data => {
        return Qs.stringify(data)
    }],
	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	timeout: 5000
})

// request拦截器
service.interceptors.request.use(config => {
	return config
}, error => {
	console.log(error)
	return Promise.reject(error)
})

export default service
