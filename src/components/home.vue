<template>
<div>
    <div class="home-cell">
        <!-- banner-cell -->
        <div class="banner-cell">
            <router-link :to="'/city'" class="city">
                <i class="icon-pointer pr-5"></i>城市
            </router-link>
            <swiper :options="swiperOption">
                <swiper-slide v-for="swiper in swiperList" :key="swiper">
                    <img :src="swiper" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="border-colour cf">
                <span v-for="i in borderColors" :key="i" :style="{backgroundColor: i}"></span>
            </div>
        </div>
        <!-- banner-cell / -->
        <!-- nav-cell -->
        <ul class="nav-cell display-flex">
            <li class="flex" v-for="nav in navList" :key="nav">
                <router-link :to="nav.url"><span></span>{{nav.name}}</router-link>
            </li>
        </ul>
        <!-- nav-cell / -->
        <!-- find-cell -->
        <ul class="find-cell display-flex">
            <li class="flex"><router-link :to="''">
                <span></span>
                找驾校
            </router-link></li>
            <li class="flex"><router-link :to="''">
                <span></span>
                找教练
            </router-link></li>
        </ul>
        <!-- find-cell / -->
        <!-- school-list-cell -->
        <div class="school-list-cell">
            <!-- nav -->
            <ul class="nav display-flex">
                <li class="choose flex">推荐</li>
                <li class="flex">距离</li>
                <li class="flex">价格</li>
                <li class="flex">好评</li>
            </ul>
            <!-- nav / -->
            <!-- con -->
            <ul class="con">
                <li class="mb-10">
                    <div class="recommend"></div>
                    <div class="border display-flex">
                        <img src="../images/dome/s1.jpg" alt="">
                        <div class="info flex">
                            <div class="name">呱呱驾校</div>
                            <stars num="2"></stars>
                            <div class="detail">
                                <span class="icon-bg icon-bus"></span>
                                <span class="icon-bg icon-quan"></span>
                            </div>
                            <div class="gps">距离你 5.6km</div>
                        </div>
                    </div>
                    <div class="border display-flex">
                        <div class="class flex">
                            <div class="name">VIP班 <span class="btn-blue">C1</span></div>
                            <div class="text mt-5 mb-5">最快15天拿证，1人/车，班车接送。最快15天拿证，1人/车，班车接送最快15天拿证，1人/车，班车接送。最快15天拿证，1人/车，班车接送</div>
                            <div class="text-red">¥3960</div>
                        </div>
                        <div class="btn ml-40 mt-10">
                            <span>首付 ¥<b class="pl-5">250</b></span>
                            <strong class="btn-blue">报名</strong>
                        </div>
                    </div>
                    <div class="border display-flex">
                        <div class="class flex">
                            <div class="name">VIP班 <span class="btn-blue">C1</span></div>
                            <div class="text mt-5 mb-5">最快15天拿证，1人/车，班车接送。最快15天拿证，1人/车，班车接送最快15天拿证，1人/车，班车接送。最快15天拿证，1人/车，班车接送</div>
                            <div class="text-red">¥3960</div>
                        </div>
                        <div class="btn ml-40 mt-10">
                            <span>首付 ¥<b class="pl-5">0</b></span>
                            <strong class="btn-blue">报名</strong>
                        </div>
                    </div>
                    <router-link class="more" :to="''">查看更多班型 》</router-link>
                </li>
                <li class="mb-10">
                    <div class="recommend"></div>
                    <div class="border display-flex">
                        <img src="../images/dome/s1.jpg" alt="">
                        <div class="info flex">
                            <div class="name">呱呱驾校</div>
                            <stars num="2"></stars>
                            <div class="detail">
                                <span class="icon-bg icon-bus"></span>
                                <span class="icon-bg icon-quan"></span>
                            </div>
                            <div class="gps">距离你 5.6km</div>
                        </div>
                    </div>
                    <div class="border display-flex">
                        <div class="class flex">
                            <div class="name">VIP班 <span class="btn-blue">C1</span></div>
                            <div class="text mt-5 mb-5">最快15天拿证，1人/车，班车接送。最快15天拿证，1人/车，班车接送最快15天拿证，1人/车，班车接送。最快15天拿证，1人/车，班车接送</div>
                            <div class="text-red">¥3960</div>
                        </div>
                        <div class="btn ml-40 mt-10">
                            <span>首付 ¥<b class="pl-5">250</b></span>
                            <strong class="btn-blue">报名</strong>
                        </div>
                    </div>
                    <div class="border display-flex">
                        <div class="class flex">
                            <div class="name">VIP班 <span class="btn-blue">C1</span></div>
                            <div class="text mt-5 mb-5">最快15天拿证，1人/车，班车接送。最快15天拿证，1人/车，班车接送最快15天拿证，1人/车，班车接送。最快15天拿证，1人/车，班车接送</div>
                            <div class="text-red">¥3960</div>
                        </div>
                        <div class="btn ml-40 mt-10">
                            <span>首付 ¥<b class="pl-5">0</b></span>
                            <strong class="btn-blue">报名</strong>
                        </div>
                    </div>
                    <router-link class="more" :to="''">查看更多班型 》</router-link>
                </li>
            </ul>
            <!-- con / -->
        </div>
        <!-- school-list-cell / -->
    </div>
    <consultation></consultation>
    <foot-nav></foot-nav>
</div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import footNav from '@/components/blocks/footNav'
import stars from '@/components/blocks/stars'
import consultation from '@/components/blocks/consultation'
export default {
    name: 'home',
    data () {
        return {
            swiperList: [
                '/static/banner1.jpg',
                '/static/banner1.jpg'
            ],
            swiperOption: {
                pagination: '.swiper-pagination',
                autoplay: 3000
            },
            borderColors: ['#f33422', '#ff9c00', '#00cdaa', '#009cff', '#7400d6', '#e740d9'],
            navList: [
                {
                    name: '常见问题', url: ''
                },
                {
                    name: '报名须知', url: ''
                },
                {
                    name: '学车流程', url: ''
                },
                {
                    name: '不过包赔', url: ''
                },
                {
                    name: '0元学车', url: ''
                }
            ]
        }
    },
    mounted () {
        this.$http.get('/res/schoolQuota/listQuota', {
            params: {
            pageNumber: 1,
            pageSize: 20
            }
        }).then((response) => {
        })
    },
    methods: {
    },
    components: {
        swiper,
        swiperSlide,
        stars,
        footNav,
        consultation
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/mixin';
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
            font-size: rem(20px);
            color: #626262;
            &:active {
                background-color: $active-color;
            }
            span {
                display: block;
                width: rem(86px);
                height: rem(87px);
                margin: 0 auto rem(12px);
                background-image: url(../images/home-nav.png);
                background-size: rem(86px) rem(440px);
                background-repeat: no-repeat;
            }
        }
        &:nth-child(1) span{
            background-position: 0 0;
        }
        &:nth-child(2) span{
            background-position: 0 -1 *rem(88px);
        }
        &:nth-child(3) span{
            background-position: 0 -2 *rem(88px);
        }
        &:nth-child(4) span{
            background-position: 0 -3 *rem(88px);
        }
        &:nth-child(5) span{
            background-position: 0 -4 *rem(88px);
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
                background-image: url(../images/find-nav.png);
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
        padding: rem(20px) 0 rem(15px);
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
