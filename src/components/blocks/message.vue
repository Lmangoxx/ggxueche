<template>
<div class="message">
    <i :class="options.type"></i>
    <p class="mt-10">{{options.text}}</p>
</div>
</template>

<script>
export default {
    name: 'message',
    props: {
		options: {
			type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.message {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: rem(150px);
    font-size: rem(25px);
    color: #fff;
    text-align: center;
    padding: rem(36px);
    border-radius: rem(10px);
    background-color: rgba(0, 0, 0, .9);
    transform: translate(-50%, -50%);
    z-index: 9999;
    i {
		width: rem(65px);
		height: rem(65px);
		font-size: rem(60px);
    }
}
</style>
