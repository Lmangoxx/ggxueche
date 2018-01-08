<template>
<transition name="el-fade-in">
    <router-view></router-view>
</transition>
</template>
<script>
export default {
	name: 'app'
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
