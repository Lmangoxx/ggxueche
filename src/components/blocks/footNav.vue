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
@import '../../style/mixin';
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
            background-image: url(../../images/foot-nav.png);
            background-size: rem(100px) rem(199px);
            background-repeat: no-repeat;
            margin: 0 auto;
        }
        &:nth-child(1) span{
            background-position: rem(1px) 0;
        }
        &:nth-child(2) span{
            background-position: rem(1px) -1*rem(51px);
        }
        &:nth-child(3) span{
            background-position: rem(1px) -2*rem(51px);
        }
        &:nth-child(4) span{
            background-position: rem(1px) -3*rem(51px);
        }
        &.router-link-active {
            color: $main-color;
        }
        &:nth-child(1).router-link-active span{
            background-position: rem(-53px) 0;
        }
        &:nth-child(2).router-link-active span{
            background-position: rem(-53px) -1*rem(51px);
        }
        &:nth-child(3).router-link-active span{
            background-position: rem(-53px) -2*rem(51px);
        }
        &:nth-child(4).router-link-active span{
            background-position: rem(-53px) -3*rem(51px);
        }
    }
}
</style>
