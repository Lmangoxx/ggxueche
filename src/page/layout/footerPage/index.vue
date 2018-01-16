<template>
<div class="footer-cell cf">
    <div class="footer-cell-inner fl"> 2014 - {{newYear}} &copy; ggxueche by <a href="//www.1580che.com" title="北京1580互联网科技有限公司" target="_blank">1580</a>.
    </div>
    <div class="scroll-to-top fr">
        <i class="icon-arrow-up" @click="goTop"></i>
    </div>
</div>
</template>

<script>
export default {
    name: 'footerPage',
    data () {
		return {
			newYear: new Date().getFullYear().toString()
		}
	},
	methods: {
		goTop () {
			this.$('body,html').animate({scrollTop: 0}, 500)
		}
	}
}
</script>
<style lang="scss" scoped>
.footer-cell {
	line-height: 30px;
	i.icon-arrow-up {
		font-size: 20px;
		cursor: pointer;
		&:hover {
			color: $--color-primary;
		}
	}
}
</style>
