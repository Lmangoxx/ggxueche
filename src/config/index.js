/**
 * 项目全局模块、指令、原型链函数定义
 */
import Vue from 'vue'
import headerCell from '@/components/header'
import footNav from '@/components/footNav'
import loading from '@/components/loading'

Vue.component('header-cell', headerCell)
Vue.component('foot-nav', footNav)
Vue.component('loading', loading)
