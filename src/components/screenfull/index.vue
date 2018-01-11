<template>
	<i :class="isFullscreen ? 'icon-size-actual' : 'icon-size-fullscreen'" @click="screenfullFun" v-if="screenfullStatus"></i>
</template>

<script>
import screenfull from 'screenfull'
export default {
    name: 'screenfull',
	data () {
		return {
            isFullscreen: false,
            screenfullStatus: false
		}
	},
    created () {
		let vm = this
		// 如果浏览器支持全屏，显示图标
        if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
            vm.screenfullStatus = true
        }
        // 监听全屏状态切换图标
        vm.$(document).on(screenfull.raw.fullscreenchange, function () {
            vm.isFullscreen = screenfull.isFullscreen
        })
    },
	methods: {
        screenfullFun () {
            screenfull.toggle()
            this.isFullscreen = screenfull.isFullscreen
        }
	}
}
</script>
