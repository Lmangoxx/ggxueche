<template>
<div class="message">
    <i :class="'icon-' + options.type">{{options.text}}</i>
</div>
</template>

<script>
export default {
    name: 'message',
    props: {
        options: {
            type: Object,
            default: {
                'type': 'default',
                'text': '成功'
            }
        }
    },
    data () {
        return {
            footNavList: [
                {name: '报名', url: '/home'},
                {name: '学车', url: '/learn'},
                {name: '发现', url: '/find'},
                {name: '我的', url: '/my'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/mixin';
.message {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: rem(36px) rem(36px);
    border-radius: rem(15px);
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 1);
}
</style>
