<template>
<div class="header-cell cf">
    <i class="fa" :class="$root.settings.sidebarToggler ? 'fa-indent' : 'fa-dedent'" @click="$root.settings.sidebarToggler = !$root.settings.sidebarToggler"></i>
    <div class="fr">
        <i :class="isFullscreen ? 'icon-size-fullscreen' : 'icon-size-actual'" @click="screenfullFun" v-if="screenfullStatus"></i>
    </div>
</div>
</template>

<script>
import screenfull from 'screenfull'
export default {
    name: 'headerPage',
    props: {
        userData: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
	data () {
		return {
            isFullscreen: true,
            screenfullStatus: false
		}
	},
    created () {
        if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
            this.screenfullStatus = true
        }
        this.$(document).on(screenfull.raw.fullscreenchange, function () {
            this.isFullscreen = screenfull.isFullscreen
        })
    },
	methods: {
        screenfullFun () {
            screenfull.toggle()
            this.isFullscreen = screenfull.isFullscreen
        },
        signOut () {
            let vm = this
            vm.$axios.get('/loginout').then(response => {
                if (response.code === 0) {
                    vm.$router.push('/login')
                }
            })
        }
	}
}
</script>
<style lang="scss" scoped>
@import '../../../element-variables.scss';
.header-cell {
    height: $--header-height;
    line-height: $--header-height;
    margin-left: -$--main-padding;
    margin-right: -$--main-padding;
    i {
        display: inline-block;
        width: 64px;
        height: 64px;
        line-height: inherit;
        font-size: 18px;
        text-align: center;
        cursor: pointer;
        &:hover {
            background-color: $--color-primary-light-9;
        }
    }
}
</style>
