<template>
<div>
    <header-cell :options="{'speech': true, 'share': true}">呱呱驾校</header-cell>
    <div class="learn-cell con-cell">
        <!-- nav-cell -->
        <ul class="nav display-flex">
            <li class="flex" v-for="nav in navList" :key="nav">
                <router-link :to="nav.url"><span class="icon-bg"></span>{{nav.name}}</router-link>
            </li>
        </ul>
        <!-- / nav-cell -->
        <div class="subject mt-20">
            <div class="con">
                <router-link tag="span" v-for="subject in subjectList" :key="subject" :to="subject.url">
                    <i class="icon-bg"></i><em>{{subject.name}}</em>
                </router-link>
            </div>
        </div>
        <router-view id="router-view-learn"></router-view>
    </div>
    <foot-nav></foot-nav>
</div>
</template>

<script>
export default {
    name: 'learn',
    data () {
        return {
            navList: [
                {name: '咨询', url: ''},
                {name: '班车', url: ''},
                {name: '约考', url: ''},
                {name: '评价', url: ''}
            ],
            subjectList: [
                {name: '科目一', url: 's1'},
                {name: '科目二', url: 's2'},
                {name: '科目三', url: 's3'},
                {name: '科目四', url: 's4'},
                {name: '领驾照', url: 'so'}
            ]
        }
    },
    mounted () {
    },
    methods: {
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>
@import '../../static/style/mixin';
.learn-cell {
    height: 100%;
    padding-bottom: rem(110px);
    .nav {
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
            }
            @for $i from 1 through 4 {
                &:nth-child(#{$i}) span {
                    background-position: rem(-92px) ($i - 1)*rem(-82px);
                }
            }
        }
    }
    .subject {
        padding: rem(35px) rem(62px) rem(55px);
        background-color: #fff;
        border-bottom: border();
        .con {
            position: relative;
            height: rem(55px);
            &:before {
                content: '';
                position: absolute;
                top: rem(30px);
                left: 0;
                width: 100%;
                border-bottom: border(2px);
            }
            span {
                position: absolute;
                display: block;
                width: rem(86px);
                padding-top: rem(48px);
                text-align: center;
                transform: translateX(-50%);
                &:before {
                    content: '';
                    position: absolute;
                    top: rem(24px);
                    left: 50%;
                    width: rem(12px);
                    height: rem(12px);
                    border-radius: rem(12px);
                    background-color: #d2d2d2;
                    transform: translateX(-50%);
                }
                i {
                    display: none;
                    position: absolute;
                    top: rem(-13px);
                    width: rem(86px);
                    height: rem(86px);
                }
                @for $i from 1 through 5 {
                    &:nth-child(#{$i}) {
                        left: ($i - 1) * 25%;
                        i {
                            background-position: rem(-182px) ($i - 1)*rem(-88px);
                        }
                    }
                }
                &.router-link-active {
                    em {
                        display: none;
                    }
                    i {
                        display: block;
                    }
                }
            }
        }
    }
}
</style>
