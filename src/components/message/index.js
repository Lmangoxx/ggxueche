import Message from './message'

export default {
	install (Vue, options = {}) {
		const MessageTpl = Vue.extend(Message)
		const Cache = {}
		// 合并数据
		Object.assign(Message.defaultOpt, options)

		function message (msg, options = {}) {
			options.message = msg
			let message = Cache[options.id] || (Cache[options.id] = new MessageTpl())
			console.log()
			if (!message.$el) {
				let vm = message.$mount()
				document.querySelector(options.parent || 'body').appendChild(vm.$el)
			}
			message.queue.push(options)
		}
		Vue.message = Vue.prototype.$message = message
	}
}
