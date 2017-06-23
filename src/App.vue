<template>
<div id="app">
	<transition name="router-fade" mode="out-in">
		<router-view id="router-view-app"></router-view>
	</transition>
	<loading v-show="loading"/>
</div>
</template>

<script>
import Vue from 'vue'
export default {
	name: 'app',
	data () {
		return {
			loading: false,
			loaded: false
		}
	},
	created () {
		let vm = this
		// http拦截器，可以在这里做一些拦截操作（比如是否登录，token是否过期等等）
		Vue.http.interceptors.push((req, next) => {
			vm.messageShow = false
			vm.loaded = false
			// 如果数据很快就加载完毕，这里就不再显示loading了
			setTimeout(() => {
				if (!vm.loaded) vm.loading = true
			}, 100)
			next((res) => {
				vm.loaded = true
				vm.loading = false
				switch (res.status) {
					case 504:
						this.$message(this.CONFIG['504'])
						break
					case 502:
						this.$message(this.CONFIG['502'])
						break
					case 404:
						break
					case 302:
						break
					case 200:
						if (res.body.code === 401) {
							this.$message(this.CONFIG['401'])
						}
						return res
				}
			})
		})
		this.$http.post('/login', {
			username: 'admin',
			password: 'admin'
		}).then((response) => {
		})
	},
	methods: {
	}
}
</script>

<style lang="scss">
// 引入font-awesome字体
@import '../static/fonts/font-awesome/css/font-awesome.css';
// 引入simple-line-icons字体
@import '../static/fonts/simple-line-icons/css/simple-line-icons.css';
// 引入公共样式
@import '../static/style/common';
body {
	background-color: #f3f3f3;
}
.router-fade-enter-active, .router-fade-leave-active {
	transition: opacity .15s;
}
.router-fade-enter, .router-fade-leave-active {
	opacity: 0;
}
</style>
