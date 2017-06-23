<template>
<div class="header-cell">
	<i class="fa fa-angle-left" v-if="options.back" @click="$router.go(-1)"></i>
    <i class="icon-bubble" v-if="options.speech || false"></i>
    <i class="icon-magnifier right" v-if="options.search || false"></i>
    <i class="icon-share-alt right" v-if="options.share || false"></i>
    <i class="collect right" v-if="options.collect || false"></i>
    <div class="title"><slot></slot></div>
</div>
</template>

<script>
export default {
    name: 'header-cell',
    props: {
		options: {
			type: Object,
			default () {
				return {'back': true}
			}
		}
	},
	data () {
		return {

		}
	},
	methods: {
	}
}
</script>

<style lang="scss" scoped>
@import '../../static/style/mixin';
.header-cell {
	position: fixed;
	top: 0;
	left: 0;
    z-index: 9998;
	width: 100%;
    color: #fff;
    background-color: $main-color;
    .title {
    	height: $header-height;
    	line-height: $header-height;
    	margin: 0 rem(85px);
    	font-size: rem(32px);
		text-align: center;
    }
    i {
    	display: block;
    	width: rem(85px);
    	height: $header-height;
    	line-height: $header-height;
    	position: absolute;
    	top: 50%;
    	left: 0;
    	transform: translateY(-50%);
        font-size: rem(32px);
    	text-align: center;
    	&.right {
    		right: 0;
    		left: auto;
    	}
    	&.fa-angle-left {
    		font-size: rem(48px);
    	}
    }
}
</style>
