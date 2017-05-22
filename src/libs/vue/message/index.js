import message from './message'
export default {
	install (Vue, options) {
		Vue.prototype.$message = (options) => {

			let opt = Object.assign({
				icon: 'icon-user',
				closeTime: '2500'
			}, options)

			let messageTpl = Vue.extend({
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

			let tpl = new messageTpl().$mount().$el
			document.body.appendChild(tpl)
			setTimeout(() => {
				document.body.removeChild(tpl)
			}, opt.closeTime)
		}
	}
}