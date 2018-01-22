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
		if (from.matched.length !== to.matched.length || from.matched[0].path !== to.matched[0].path || from.matched[1].path !== to.matched[1].path) {
			Cookies.set('__listQuery', {})
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
			temporaryUrl: '/operation',
			app: {
				name: '呱呱学车管理平台'
			},
			settings: Object.assign({
				sidebarToggler: false
			}, Cookies.getJSON('__appSetting')),
			loadingInstance: null,
			loadingOptions: {
				text: '加载中'
			}
		}
	},
	created () {
		const vm = this
		// request拦截器
		vm.$axios.interceptors.request.use(config => {
			if (!vm.loadingInstance) {
				vm.loadingInstance = vm.$loading(vm.loadingOptions)
			}
			return config
		}, error => {
			vm.loadingInstance.close()
			return Promise.reject(error)
		})
		// response响应拦截器
		vm.$axios.interceptors.response.use(response => {
			let resData = response.data
			// 对响应数据做点什么
			vm.loadingInstance.close()
			switch (response.status) {
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
				case 200:
					switch (resData.code) {
						case 401:
							// 未登录提示
							vm.$message.warning(vm.CONFIG['401'])
							// 先存储当前访问页面
							vm.$root.temporaryUrl = vm.$route.path
							// 跳转到登录页
							vm.$router.push('/login')
							break
						case 0:
							return resData
						default:
							vm.$notify.error({
								title: '错误 ' + (resData.code + ':' + response.config.url.replace(/\/api/g, '') || '>_<'),
								message: resData.msg || '出错了'
							})
					}
			}
		}, error => {
			// 对响应错误做点什么
			vm.loadingInstance.close()
			return Promise.reject(error)
		})
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
