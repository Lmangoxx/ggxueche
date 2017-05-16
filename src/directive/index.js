/**
 * 项目全局指令
 */
import Vue from 'vue'
import $ from 'jquery'

Vue.prototype.$ = $
Vue.prototype.$message = new Vue({
	data () {
		return {}
	},
	template: `
		<div class="message-cell">{{text}}</div>
	`
})
// function (text, options) {
// 	options = $.extend(true, {
// 		type: 'success',
// 		text: ''
// 	}, options)
// 	$('body').append(`
// 		<div class="message-cell">options.text</div>
// 	`)
// }
