/**
 * 项目全局变量、模块、指令、原型链函数定义
 * Author: Lmango <277040350@qq.com>
 * Created: 2017/05/31
 */
import Vue from 'vue'
import $ from 'jquery'
import configLazy from '@/config/config.lazyload'
import headerCell from '@/components/header'
import footNav from '@/components/footNav'
import loading from '@/components/loading'

// 全局变量
Vue.prototype.CONFIG = {
	'504': '网络异常',
	'401': '请先登录'
}

Vue.directive('jquery', {
	bind: (el, binding) => {
		if (!configLazy[binding.value.name] || !configLazy[binding.value.name].length) return
		// for (let i = 0; i < configLazy[binding.value.name].length; i++) {
		// 	require(configLazy[binding.value.name][i])
		// }
		// require('@/libs/jquery/bootstrap-datetimepicker/bootstrap-datetimepicker.css')
		// require('@/libs/jquery/bootstrap-datetimepicker/bootstrap-datetimepicker.js')
	},
	inserted: (el, binding, vnode) => {
		if (!$.fn[binding.value.name] && typeof $.fn[binding.value.name] !== 'function') return
		$.fn[binding.value.name].apply($(el), [binding.value.options])
	}
})

Vue.component('header-cell', headerCell)
Vue.component('foot-nav', footNav)
Vue.component('loading', loading)

