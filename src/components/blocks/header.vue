<template>
<div class="header-cell">
	<i class="fa fa-angle-left" v-if="options.back" @click="$router.go(-1)"></i>
    <div class="title"><slot></slot></div>
    <i class="icon-magnifier right" v-if="options.search"></i>
    <i class="collect right" v-if="options.collect"></i>
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
	}
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.header-cell {
	position: fixed;
	top: 0;
	left: 0;
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
    	width: rem(80px);
    	height: $header-height;
    	line-height: $header-height;
    	position: absolute;
    	top: 50%;
    	left: 0;
    	transform: translateY(-50%);
    	font-size: rem(48px);
    	text-align: center;
    	&.right {
    		right: 0;
    		left: auto;
    	}
    	&.icon-magnifier {
    		font-size: rem(30px);
    	}
    }
}
</style>
