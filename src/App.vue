<template>
<div id="app">
	<transition name="router-fade" mode="out-in">
		<router-view v-on:message="updataMessage"></router-view>
	</transition>
	<message v-show="messageShow" :options="messageOptions"></message>
	<loading v-show="loading"/>
</div>
</template>

<script>
import Vue from 'vue'
export default {
	name: 'app',
	data () {
		return {
			messageShow: false,
			messageOptions: {},
			messageAutoClose: 2000,
			loading: false,
			loaded: false
		}
	},
	mounted () {
		let vm = this
		// http拦截器，可以在这里做一些拦截操作（比如是否登录，token是否过期等等）
		Vue.http.interceptors.push((req, next) => {
			vm.messageShow = false
			vm.loaded = false
			// 如果数据很快就加载完毕，这里就不再显示loading了
			setTimeout(function () {
				if (!vm.loaded) vm.loading = true
			}, 80)
			next((res) => {
				vm.loaded = true
				vm.loading = false
				switch (res.status) {
					case 504:
						break
					case 404:
						break
					case 302:
						break
					case 200:
						if (res.body.code === 401) {
							vm.updataMessage({
								text: '请先登录'
							})
						}
						return res
				}
			})
		})
		// this.$http.post('/login', {
		// 	username: 'admin',
		// 	password: 'admin'
		// }).then((response) => {
		// })
	},
	methods: {
		updataMessage (val) {
			this.messageShow = true
			this.messageOptions = val
			setTimeout(() => {
				this.messageShow = false
			}, this.messageOptions.closeTime || this.messageAutoClose)
		}
	}
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
