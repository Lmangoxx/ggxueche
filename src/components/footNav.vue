<template>
<div class="foot-nav display-flex">
    <router-link
        class="flex"
        v-for="footNav in footNavList"
        :to="footNav.url"
        :key="footNav.$index">
        <span></span>{{footNav.name}}
    </router-link>
</div>
</template>

<script>
export default {
    name: 'foot-nav',
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
@import '../../static/style/mixin';
.foot-nav {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10000;
    width: 100%;
    background-color: #fff;
    border-top: border(1px);
    box-shadow: 0 rem(-1px) rem(20px) rgba(0,0,0,.2);
    a {
        display: block;
        font-size: rem(20px);
        color: #333;
        padding: rem(13px) 0 rem(10px);
        text-align: center;
        span {
            display: block;
            width: rem(47px);
            height: rem(47px);
            background-image: url(/static/images/foot-nav.png);
            background-size: rem(100px) rem(199px);
            background-repeat: no-repeat;
            margin: 0 auto;
        }
        @for $i from 1 through 4 {
            &:nth-child(#{$i}) span {
                background-position: rem(1px) ($i - 1)*rem(-51px);
            }
        }
        &.router-link-active {
            color: $main-color;
        }
        @for $i from 1 through 4 {
            &:nth-child(#{$i}).router-link-active span {
                background-position: rem(-53px) ($i - 1)*rem(-51px);
            }
        }
    }
}
</style>
