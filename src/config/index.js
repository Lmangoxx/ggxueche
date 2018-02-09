/**
 * 项目全局变量、模块、指令、原型链函数定义
 * Author: Lmango <277040350@qq.com>
 * Created: 2017/05/31
 */
import Vue from 'vue'
import $ from 'jquery'
import configLazy from '@/config/config.lazyload'

// 全局引入jquery
Vue.prototype.$ = $

// 全局变量
Vue.prototype.CONFIG = {
	'504': '请求超时，请稍后再试',
	'502': '服务器异常',
	'401': '请先登录'
}

Vue.directive('jquery', {
	bind: (el, binding) => {
		if (!configLazy[binding.value.name] || !configLazy[binding.value.name].length) return
		configLazy[binding.value.name].map((val, index) => {
			// require(`libs/${val}`)
		})
	},
	inserted: (el, binding, vnode) => {
		if (!$.fn[binding.value.name] && typeof $.fn[binding.value.name] !== 'function') {
			throw new Error(`${binding.value.name} is not function`)
		}
		$.fn[binding.value.name].apply($(el), [binding.value.options])
	}
})
