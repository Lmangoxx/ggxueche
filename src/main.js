import Vue from 'vue'
import VueResource from 'vue-resource'
// 引入路由配置文件
import router from './router'
// 引入全局vue插件文件
import './config/index'
// 引入模块
import app from './app'

/**
 * 引入Element插件
 */
import Element from 'element-ui'
import '../theme/index.css'
Vue.use(Element)

/**
 * 引入vue-lazyload实现异步加载
 */
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
	preLoad: 1,
	error: '/static/images/error.jpg',
	loading: '/static/images/loading.jpg',
	attempt: 2
})

Vue.config.productionTip = false

// 注入VueResource到vue中
Vue.use(VueResource)
// 配置编码为application/json的请求，解决请求获取不到参数问题
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: `<app/>`,
	data () {
		return {
			temporaryUrl: '/operation',
			settings: {
				sidebarToggler: false
			}
		}
	},
	components: {
		app
	},
	watch: {
		temporaryUrl: {
			handler: function (val, oldVal) {
				console.log(val)
			},
			deep: true
		}
	}
})
