import $ from 'jquery'
import message from './message'

export default {
	install (Vue, options) {
		let opt, MessageTpl, tpl
		Vue.prototype.$message = (options) => {
			// 判断options类型
			if (typeof options !== 'object' || options === undefined) {
				throw new Error('"' + options + '" 参数类型错误')
			}
			// 先移除已经存在的提示框
			messageClose()

			// 合并数据
			opt = Object.assign({
				closeTime: '2500'
			}, options)

			// 定义组件
			MessageTpl = Vue.extend({
				data () {
					return {
						messageOptions: opt
					}
				},
				template: `<message :options="messageOptions"></message>`,
				components: {
					message
				}
			})
			// 实例化组件
			tpl = new MessageTpl().$mount().$el
			// 添加到页面上
			$('#router-view-app').append(tpl)
			// 设置定时器
			setTimeout(() => {
				messageClose()
			}, opt.closeTime)
		}
		/* 提示框存在时，移除提示框 */
		let messageClose = () => {
			if ($('.vue-message')) {
				$('.vue-message').remove()
			}
		}
	}
}
