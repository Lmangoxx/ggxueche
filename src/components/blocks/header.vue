<template>
<div class="header-cell display-flex">
    <i class="icon-back" v-show="options.back" :click="goBack()">返回</i>
    <div class="title flex"><slot></slot></div>
    <span class="search" v-show="options.search">搜索</span>
    <span class="collect" v-show="options.collect">收藏</span>
</div>
</template>

<script>
export default {
    name: 'header-cell',
    props: {
		options: {
			type: Object,
			default: {
				'back': true,
				'search': false,
				'collect': false
			}
		}
	},
	data () {
		return {

		}
	},
	methods: {
		goBack () {
			// history.go(-1)
			console.log('1')
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.header-cell {
    height: rem(50px);
    line-height: rem(50px);
    color: #fff;
    background-color: #cf2626;
    .title { 
		text-align: center;
    }
}
</style>
