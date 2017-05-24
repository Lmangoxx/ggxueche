import $ from 'jquery'
import message from './message'
export default {
	install (Vue, options) {
		let opt, messageTpl, tpl
		Vue.prototype.$message = (options) => {

			if(typeof options !== 'object' || options === undefined) {
				throw new Error('"' + options + '" 参数类型错误')
				return
			}

			messageClose()

			opt = Object.assign({
				closeTime: '2500'
			}, options)

			messageTpl = Vue.extend({
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

			tpl = new messageTpl().$mount().$el
			$('#router-view-app').append(tpl)
			setTimeout(() => {
				messageClose()
			}, opt.closeTime)
		}
		let messageClose = () => {
			if($('.vue-message')) {
				$('.vue-message').remove()
			}
		}
	}
}