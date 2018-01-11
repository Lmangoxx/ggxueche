import Vue from 'vue'
import 'babel-polyfill'
import 'es6-promise-polyfill'
// 引入font-awesome字体
import '../static/fonts/font-awesome/css/font-awesome.min.css'
// 引入simple-line-icons字体
import '../static/fonts/simple-line-icons/css/simple-line-icons.css'
// 引入公共样式
import '../static/style/common'
// 引入路由配置文件
import router from './router'
// 引入全局vue插件文件
import './config'
// 引入模块
import app from './app'
import Cookies from 'js-cookie'

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

// 引入Element插件
import Element from 'element-ui'
import '../theme/index.css'
Vue.use(Element)

// 引入vue-lazyload实现异步加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
	preLoad: 1,
	error: '/static/images/error.jpg',
	loading: '/static/images/loading.jpg',
	attempt: 2
})

/* eslint-disable no-new */
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
			}, Cookies.getJSON('appSetting')),
			loadingInstance: null,
			loadingOptions: {
				text: '加载中'
			}
		}
	},
	created () {
		let vm = this
		// request拦截器
		vm.$axios.interceptors.request.use(config => {
			vm.loadingInstance = vm.$loading(vm.loadingOptions)
			return config
		}, error => {
			vm.loadingInstance.close()
			return Promise.reject(error)
		})
		// response响应拦截器
		vm.$axios.interceptors.response.use(response => {
			// 对响应数据做点什么
			vm.loadingInstance.close()
			switch (response.status) {
				case 504:
					vm.$message.error(vm.CONFIG['504'])
					break
				case 502:
					vm.$message.error(vm.CONFIG['502'])
					break
				case 404:
					vm.$router.push('/404')
					break
				case 302:
					break
				case 200:
					if (response.data.code === 401) {
						// 未登录提示
						vm.$message(vm.CONFIG['401'])
						// 先存储当前访问页面
						vm.$root.temporaryUrl = vm.$route.path
						// 跳转到登录页
						vm.$router.push('/login')
					} else {
						return response.data
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
				Cookies.set('appSetting', val)
			},
			deep: true
		}
	}
})
