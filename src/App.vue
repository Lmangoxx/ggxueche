<template>
<transition name="el-fade-in">
    <router-view
    	v-loading.fullscreen.lock="fullscreenLoading"
    	element-loading-text="加载中..."
    ></router-view>
</transition>
</template>
<script>
import Vue from 'vue'
export default {
	name: 'app',
	data () {
		return {
			fullscreenLoading: false,
			loaded: false
		}
	},
	beforeCreate () {
		let vm = this
		// http拦截器，可以在这里做一些拦截操作（比如是否登录，token是否过期等等）
		Vue.http.interceptors.push((req, next) => {
			vm.loaded = false
			// 如果数据很快就加载完毕，这里就不再显示loading了
			setTimeout(() => {
				if (!vm.loaded) vm.fullscreenLoading = true
			}, 100)
			next((res) => {
				vm.loaded = true
				vm.fullscreenLoading = false
				switch (res.status) {
					case 504:
						vm.$message.error(this.CONFIG['504'])
						break
					case 502:
						vm.$message.error(this.CONFIG['502'])
						break
					case 404:
						this.$router.push('/404')
						break
					case 302:
						break
					case 200:
						if (res.body.code === 401) {
							// 未登录提示
							vm.$message(this.CONFIG['401'])
							// 先存储当前访问页面
							this.$root.temporaryUrl = this.$route.path
							// 跳转到登录页
							this.$router.push('/login')
						} else {
							return res
						}
				}
			})
		})
	},
	mounted () {
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
</style>
