<template>
<div class="header-cell display-flex">
    <i class="icon-back" v-show="options.back"></i>
    <div class="title flex"><slot></slot></div>
    <span class="search"></span>
    <span class="collect"></span>
</div>
</template>

<script>
export default {
    name: 'header-cell',
    props: {
		options: {
			type: Object,
			default: {
				'back': true
			}
		}
	},
	data () {
		return {

		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.header-cell {
    height: rem(50px);
    background-color: #cf2626;
    .title { 
		text-align: center;
    }
}
</style>
