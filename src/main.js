// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
// 引入路由配置文件
import router from './router'
// 引入全局指令文件
import './directive'
// 引入rem初始化文件
import './config/rem'
// 引入app模块
import app from './app'
// 引入loading模块
import loading from './components/blocks/loading'

Vue.config.productionTip = false

// 注入VueResource到vue中
Vue.use(VueResource)
// 配置编码为application/json的请求，解决请求获取不到参数问题
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<div><app/><loading v-show="loading"/></div>',
	data () {
		return {
			loading: false,
			loaded: false
		}
	},
	mounted () {
		let vm = this
		// http拦截器，可以在这里做一些拦截操作（比如是否登录，token是否过期等等）
		Vue.http.interceptors.push((req, next) => {
			vm.loaded = false
			// 如果数据很快就加载完毕，这里就不再显示loading了
			setTimeout(function () {
				if (!vm.loaded) vm.loading = true
			}, 80)
			next((res) => {
				vm.loaded = true
				vm.loading = false
				if (res.status === 504) {
					// 逻辑
				}
				// return res
			})
		})
    },
	components: {
		app,
		loading
	}
})
