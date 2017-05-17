<template>
<div id="app">
	<transition name="router-fade" mode="out-in">
		<div>
			<message v-show="messageType" :options="messageOptions"></message>
			<router-view v-on:message="updataMessage"></router-view>
		</div>
	</transition>
</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			messageType: false,
			messageOptions: {}
		}
	},
	mounted () {
		// this.$http.post('/login', {
		// 	username: 'admin',
		// 	password: 'admin'
		// }).then((response) => {
		// })
	},
	methods: {
		updataMessage (val) {
			this.messageType = true
			this.messageOptions = val
			setTimeout(() => {
				this.messageType = false
			}, this.messageOptions.closeTime || 2000)
		}
	}
	// components: {
	// 	message
	// }
}
</script>

<style lang="scss">
// 引入font-awesome字体
@import './fonts/font-awesome/css/font-awesome.css';
// 引入simple-line-icons字体
@import './fonts/simple-line-icons/css/simple-line-icons.css';
// 引入公共样式
@import './style/common';
body {
	background-color: #f3f3f3;
}
.router-fade-enter-active, .router-fade-leave-active {
	transition: opacity .2s;
}
.router-fade-enter, .router-fade-leave-active {
	opacity: 0;
}
</style>
