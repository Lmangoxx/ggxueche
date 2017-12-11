<template>
    <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="dashboard-stat blue">
                <div class="visual">
                    <i class="fa fa-comments"></i>
                </div>
                <div class="details">
                    <div class="number">
                        <span data-counter="counterup" data-value="1349">0</span>
                    </div>
                    <div class="desc"> New Feedbacks </div>
                </div>
                <a class="more" href="javascript:;"> View more
                    <i class="m-icon-swapright m-icon-white"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../static/style/mixin';
.home-cell {
    height: 100%;
    padding-bottom: rem(110px);
}
.banner-cell {
    position: relative;
    text-align: center;
    padding-bottom: rem(5px);
    .city {
        position: absolute;
        display: block;
        top: rem(15px);
        left: rem(15px);
        z-index: 2;
        height: rem(45px);
        line-height: rem(45px);
        border-radius: rem(45px);
        padding: 0 rem(12px);
        background-color: rgba(0,0,0,.3);
        font-size: rem(24px);
        color: #fff;
    }
    .swiper-container {
        height: rem(380px);
    }
    .border-colour {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: rem(5px);
        z-index: 2;
        span {
            display: inline-block;
            width: (100% / 6);
            height: rem(5px);
            float: left;
        }
    }
}
.nav-cell {
    background-color: #fff;
    li {
        width: (100% / 5);
        text-align: center;
        a {
            display: block;
            padding: rem(23px) 0 rem(10px);
            font-size: rem(22px);
            color: #626262;
            span {
                display: block;
                width: rem(86px);
                height: rem(87px);
                margin: 0 auto rem(12px);
                background-image: url(/static/images/home-nav.png);
                background-size: rem(86px) rem(440px);
                background-repeat: no-repeat;
            }
        }
        @for $i from 1 through 5 {
            &:nth-child(#{$i}) span {
                background-position: 0 ($i - 1)*rem(-88px);
            }
        }
    }
}
.find-cell {
    background-color: #fff;
    li {
        width: 50%;
        padding-top: rem(30px);
        padding-bottom: rem(30px);
        a {
            display: block;
            width: rem(240px);
            height: rem(96px);
            border-radius: rem(5px);
            font-size: rem(32px);
            font-weight: bold;
            color: #fff;
            margin: 0 auto;
            span {
                display: inline-block;
                width: rem(52px);
                height: rem(65px);
                margin: rem(16px) rem(25px) 0 rem(29px);
                background-image: url(/static/images/find-nav.png);
                background-size: rem(52px) rem(131px);
                background-repeat: no-repeat;
                vertical-align: rem(-20px);
            }
        }
        &:nth-child(1) {
            a {
                background-color: #4bb8f0;
                span {
                    background-position: 0 0;
                }
                &:active {
                    background-color: rgba(75, 184, 240, .8);
                }
            }
        }
        &:nth-child(2) {
            a {    
                background-color: #38bdc2;
                span {
                    background-position: 0 rem(-66px);
                }
                &:active {
                    background-color: rgba(56, 189, 194, .8);
                }
            }
        }
    }
}
.school-list-cell {
    .nav {
        padding: rem(20px) 0;
        border-top: border();
        border-bottom: border();
        background-color: #fff;
        li {
            width: 25%;
            font-size: rem(26px);
            color: #3f3f3f;
            text-align: center;
            border-right: border();
            &.choose {
                color: $main-color;
            }
            &:last-child {
                border: none;
            }
        }
    }
    .con {
        li {
            position: relative;
            background-color: #fff;
            padding: 0 rem(25px);
            .recommend {
                position: absolute;
                top: 0;
                left: 0;
                width: rem(80px);
                height: rem(80px);
                overflow: hidden;
                &:before {
                    content: '推荐';
                    position: absolute;
                    top: rem(10px);
                    left: rem(-25px);
                    width: rem(100px);
                    height: rem(30px);
                    line-height: rem(30px);
                    color: #fff;
                    text-align: center;
                    background-color: #ff5432;
                    transform: rotate(-45deg);
                }
            }
            .border {
                padding: rem(23px) 0;
                border-bottom: border();
                img {
                    width: rem(172px);
                    height: rem(96px);
                    border: border();
                    text-align: center;
                }
                .info {
                    position: relative;
                    padding-left: rem(23px);
                    .name {
                        font-size: rem(24px);
                        margin-top: rem(-4px);
                    }
                    .detail {
                        height: rem(28px);
                        margin-top: rem(10px);
                        span {
                            display: inline-block;
                            width: rem(28px);
                            height: rem(28px);
                            &.icon-bus {
                                background-position: rem(-21px) rem(-3px);
                            }
                            &.icon-quan {
                                background-position: rem(-57px) rem(-3px);
                            }
                        }
                    }
                    .gps {
                        position: absolute;
                        top: 50%;
                        right: 0;
                        transform: translateY(-50%);
                        font-size: rem(20px);
                        color: #a4a4a4;
                    }
                }
                .class {
                    .name {
                        span {
                            display: inline-block;
                            height: rem(30px);
                            line-height: rem(32px);
                            font-size: rem(18px);
                            padding: 0 rem(6px);
                            border-radius: rem(4px);
                            vertical-align: rem(1px);
                        }
                    }
                    .text {
                        color: #a4a4a4;
                        @include lineClamp(2);
                    }
                    .text-red {
                        font-size: rem(28px);
                    }
                }
                .btn {
                    width: rem(134px);
                    height: rem(98px);
                    border: border(1px, $main-color);
                    border-radius: rem(4px);
                    color: $main-color;
                    text-align: center;
                    overflow: hidden;
                    span {
                        display: block;
                        width: 100%;
                        height: rem(42px);
                        line-height: rem(42px);
                        font-size: rem(20px);
                        b {
                            font-size: rem(28px);
                            vertical-align: rem(-1px);
                        }
                    }
                    strong {
                        display: block;
                        width: 100%;
                        height: rem(56px);
                        line-height: rem(56px);
                        font-size: rem(28px);
                    }
                }
            }
            .more {
                display: block;
                font-size: rem(24px);
                color: #009cff;
                padding: rem(15px) 0;
                text-align: center;
            }
        }
    }
}
</style>
