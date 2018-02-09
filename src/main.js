import Vue from 'vue'
// import 'babel-polyfill'
// import 'es6-promise-polyfill'
// 引入公共样式
import '../static/fonts/font-awesome/css/font-awesome.min.css'
import '../static/fonts/simple-line-icons/css/simple-line-icons.css'
import '../static/style/common'
// 引入路由配置文件
import router from './router'
// 引入全局vue公共文件
import './config'

import Axios from '@/utils/axios'
Vue.use(Axios)

// 生产环境下，vue的全局配置
if (process.env.NODE_ENV === 'production') {
	Vue.config = {
		silent: true,
		productionTip: false,
		devtools: true
	}
}

// 引入Element-ui
import Element from 'element-ui'
import '../theme/index.css'
Vue.use(Element)

/* eslint-disable no-new */
// 引入模块
import app from './app'
import Cookies from 'js-cookie'

// 这里通过判断to，from的matched判断是否清空__listQuery的cookie值
router.beforeEach((to, from, next) => {
	if (from.path !== '/' && from.matched.length > 0) {
		let listLength = to.matched.length >= from.matched.length ? from.matched.length : to.matched.length
		for (let i = 0; i < listLength - 1; i++) {
			if (from.matched[i].path !== to.matched[i].path) {
				// console.log(`${from.matched[i].path},${to.matched[i].path}`)
				Cookies.set('__listQuery', {})
				break
			}
		}
	}
	next()
})

new Vue({
	el: '#app',
	router,
	template: `<app/>`,
	data () {
		return {
			/* {rootUrl} api接口的根路径，根据env变化，在/config/[dev.env.js,prod.env.js]里配置BASE_URL即可 */
			rootUrl: process.env.BASE_URL,
			/* {temporaryUrl}
				如果访问a路由的时候，提示没登录并跳转到登录页面，这个时候会把a路由存储在这里，等登录成功后再跳转到a
			*/
			temporaryUrl: {
				path: '/operation',
				query: {}
			},
			app: {
				vesion: '1.0.0',
				name: '呱呱学车管理平台'
			},
			/* {settings} 这里是一些全局配置类的东西 */
			settings: Object.assign({
				sidebarToggler: false
			}, Cookies.getJSON('__appSetting')),
			loadingInstance: null,
			loadingOptions: {
				text: '加载中'
			},
			axiosing: false
		}
	},
	created () {
		const vm = this
		// request拦截器
		vm.$axios.interceptors.request.use(config => {
			vm.axiosStart()
			return config
		}, error => {
			vm.axiosEnd()
			return Promise.reject(error)
		})
		// response响应拦截器
		vm.$axios.interceptors.response.use(response => {
			vm.axiosEnd()
			let resData = response.data
			// 对响应数据做点什么
			switch (resData.code) {
				case 401:
					// 先存储当前访问页面
					if (vm.$route.path !== '/login') vm.temporaryUrl = {path: vm.$route.path, query: vm.$route.query}
					// 未登录提示
					vm.$message.warning(vm.CONFIG['401'])
					// 跳转到登录页
					vm.$router.push('/login')
					break
				case 0:
					response.config.method === 'post' && vm.$notify.success({
						title: '操作成功'
					})
					return resData
				default:
					vm.$notify.error({
						title: '错误 ' + (resData.code + ':' + response.config.url.replace(/\/api/g, '') || '>_<'),
						message: resData.msg || '出错了'
					})
			}
		}, error => {
			// 对响应错误做点什么
			vm.axiosEnd()
			if (error && error.response) {
				switch (error.response.status) {
					case 504:
						vm.$notify.error({
							title: '504错误',
							message: vm.CONFIG['504']
						})
						break
					case 502:
						vm.$notify.error({
							title: '502错误',
							message: vm.CONFIG['502']
						})
						break
					case 404:
						vm.$router.push('/operation/404')
						break
					default:
						vm.$notify.error({
							title: error.response.status,
							message: '未知错误'
						})
				}
			}
			return Promise.reject(error)
		})
	},
	methods: {
		axiosStart () {
			const vm = this
			vm.axiosing = true
			vm.loadingInstance = vm.$loading(vm.loadingOptions)
		},
		axiosEnd () {
			const vm = this
			vm.loadingInstance.close()
			setTimeout(() => {
				vm.axiosing = false
			}, 500)
		}
	},
	components: {
		app
	},
	watch: {
		'settings': {
			handler (val, oldVal) {
				Cookies.set('__appSetting', val)
			},
			deep: true
		}
	}
})
