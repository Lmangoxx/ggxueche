// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './app'
import router from './router'
import './config/rem'
import loading from './components/blocks/loading'

Vue.config.productionTip = false

// 注入VueResource到vue中
Vue.use(VueResource)
// 配置编码为application/json的请求，解决请求获取不到参数问题
Vue.http.options.emulateJSON = true
// http拦截器，可以在这里做一些拦截操作（比如是否登录，token是否过期等等）
Vue.http.interceptors.push((req, next) => {
	loading.showloading = true
    next((res) => {
		// loading.show = false
		return res
	})
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<app/>',
	components: { app }
})
