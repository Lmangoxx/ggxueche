import Vue from 'vue'
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
			settings: Object.assign({
				name: '呱呱学车管理平台',
				sidebarToggler: false
			}, Cookies.getJSON('appSetting')),
			loadingInstance: '',
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
						return response
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
			handler: function (val, oldVal) {
				Cookies.set('appSetting', val)
			},
			deep: true
		}
	}
})
