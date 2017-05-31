/**
 * 项目全局变量、模块、指令、原型链函数定义
 * Author: Lmango <277040350@qq.com>
 * Created: 2017/05/31
 */
import Vue from 'vue'
import headerCell from '@/components/header'
import footNav from '@/components/footNav'
import loading from '@/components/loading'

// 全局变量
Vue.prototype.CONFIG = {
	'504': '网络异常',
	'401': '请先登录'
}

Vue.component('header-cell', headerCell)
Vue.component('foot-nav', footNav)
Vue.component('loading', loading)

