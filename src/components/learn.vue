<template>
<div>
    <header-cell :options="{'speech': true, 'share': true}">呱呱驾校</header-cell>
    <div class="learn-cell con-cell">
        <ul class="nav-cell display-flex">
            <li class="flex" v-for="nav in navList" :key="nav">
                <router-link :to="nav.url"><span class="icon-bg"></span>{{nav.name}}</router-link>
            </li>
        </ul>
    </div>
    <foot-nav></foot-nav>
</div>
</template>

<script>
import headerCell from '@/components/blocks/header'
import footNav from '@/components/blocks/footNav'
export default {
    name: 'home',
    data () {
        return {
            navList: [
                {name: '咨询', url: ''},
                {name: '班车', url: ''},
                {name: '约考', url: ''},
                {name: '评价', url: ''}
            ]
        }
    },
    mounted () {
        this.$message('y')
    },
    methods: {
    },
    components: {
        headerCell,
        footNav
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/mixin';
.learn-cell {
    height: 100%;
    padding-bottom: rem(110px);
    .nav-cell {
        background-color: #fff;
        li {
            width: (100% / 4);
            text-align: center;
            a {
                display: block;
                padding: rem(20px) 0;
                font-size: rem(23px);
                color: #666;
                span {
                    display: block;
                    width: rem(80px);
                    height: rem(80px);
                    margin: 0 auto rem(12px);
                }
                &:active {
                    background-color: $active-color;
                }
            }
            &:nth-child(1) span{
                background-position: rem(-92px) 0;
            }
            &:nth-child(2) span{
                background-position: rem(-92px) -1 *rem(82px);
            }
            &:nth-child(3) span{
                background-position: rem(-92px) -2 *rem(82px);
            }
            &:nth-child(4) span{
                background-position: rem(-92px) -3 *rem(82px);
            }
        }
    }
}
</style>
