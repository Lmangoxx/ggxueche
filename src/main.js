// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './app'
import router from './router'
import './config/rem'

Vue.config.productionTip = false

// 注入VueResource到vue中
Vue.use(VueResource)
// 配置请求，解决请求获取不到参数问题
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<app/>',
	components: { app }
})
