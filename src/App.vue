<template>
<div id="app">
	<transition name="router-fade" mode="out-in">
		<router-view></router-view>
	</transition>
</div>
</template>

<script>
export default {
	name: 'app',
	mounted () {
		this.$http.post('/login', {
			username: 'admin',
			password: 'admin'
		}).then((response) => {
		})
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
	transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
	opacity: 0;
}
</style>
