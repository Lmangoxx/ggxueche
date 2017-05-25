import $ from 'jquery'
import message from './message'

export default {
	install (Vue, options) {
		let opt, MessageTpl, tpl
		Vue.prototype.$message = (options) => {
			if (typeof options !== 'object' || options === undefined) {
				throw new Error('"' + options + '" 参数类型错误')
			}

			messageClose()

			opt = Object.assign({
				closeTime: '2500'
			}, options)

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

			tpl = new MessageTpl().$mount().$el
			$('#router-view-app').append(tpl)
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
