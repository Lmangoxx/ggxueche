import Vue from 'vue'
import VueResource from 'vue-resource'
// 引入路由配置文件
import router from './router'
// 引入全局vue插件文件
import './config/index'
// 引入rem初始化文件
import './config/rem'
// 引入模块
import app from './app'

import Message from '@/libs/vue/message/index'
Vue.use(Message)

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
	components: {
		app
	}
})
