import axios from 'axios'
import Qs from 'qs'

export default {
	install (Vue, options = {}) {
		// 创建axios实例
		const service = axios.create(Object.assign({
			baseURL: process.env.BASE_URL,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			// #transformRequest 允许在向服务器发送前，修改传递参数
			// #这里通过Qs.stringify转换为表单查询参数
			transformRequest: [data => {
				return Qs.stringify(data)
			}],
			// 设置允许跨域
			withCredentials: true,
			timeout: 5000
		}, options))

		Vue.axios = Vue.prototype.$axios = service
	}
}
