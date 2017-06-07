<template>
<div class="s1">
    <ul class="nav display-flex" v-jquery="'datetimepicker'">
        <router-link class="flex" v-for="nav in navList" :to="''" :key="nav">
            <div class="img"><img :src="nav.img" :alt="nav.name"></div>
            <p>{{nav.name}}</p>
        </router-link>
    </ul>
    <div class="groups mt-20 display-flex">
        <i class="icon-bg icon-video"></i>
        <span class="pl-15 flex">视频教学</span>
    </div>
    <ul class="video cf">
        <router-link tag="li" class="box-sizing" v-for="video in videoList" :to="video.url" :key="video">
            <div class="img icon-control-play"><img v-lazy="video.img" :alt="video.name"></div>
            <p>{{video.name}}</p>
        </router-link>
    </ul>
    <router-link class="groups mt-20 display-flex" :to="''">
        <i class="icon-bg icon-questions"></i>
        <span class="pl-15 flex">呱呱驾校常见问题</span>
        <em class="text-sub">
            更多
            <i class="fa fa-angle-right"></i>
        </em>
    </router-link>
    <ul class="information">
        <router-link v-for="question in questionList" :to="question.url" :key="question">
            <em class="text-sub">·</em> {{question.title}}
        </router-link>
    </ul>
    <router-link tag="div" class="mt-20" :to="''">
        <img v-lazy="'/static/images/dome/ad1.jpg'">
    </router-link>
    <router-link class="groups mt-20 display-flex" :to="''">
        <i class="icon-bg icon-bbs"></i>
        <span class="pl-15 flex">科一论坛</span>
        <em class="text-sub">
            153736位男神女神同约考
            <i class="fa fa-angle-right"></i>
        </em>
    </router-link>
    <div class="bbs">
        <swiper class="daren" :options="swiperOption">
            <swiper-slide v-for="daren in darenList" :key="daren">
                <router-link :to="daren.url">
                    <div class="icon-bg icon-daren"></div>
                    <img v-lazy="daren.img" :alt="daren.name">
                    <p class="mt-10">{{daren.name}}</p>
                </router-link>
            </swiper-slide>
            <div class="swiper-scrollbar"></div>
        </swiper>
        <ul class="information">
            <router-link v-for="question in questionList" :to="question.url" :key="question">
                <i class="fa fa-image"></i> {{question.title}}
            </router-link>
        </ul>
    </div>
    <div class="groups mt-20 display-flex" :to="''">
        <i class="icon-bg icon-skill"></i>
        <span class="pl-15 flex">科一技巧</span>
    </div>
    <div class="news">
        <router-link class="display-flex" v-for="news in newsList" :to="news.url" :key="news">
            <div class="info">
                <div class="title">{{news.title}}</div>
                <p class="display-flex"><i class="icon-eye text-sub flex"> 220</i><i class="icon-bubble text-sub flex"> 1230</i></p>
            </div>
            <div class="img">
                <img v-lazy="news.img" alt="">
            </div>
        </router-link>
    </div>
</div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
    name: 's1',
    data () {
        return {
            swiperOption: {
                scrollbar: '.swiper-scrollbar',
                slidesPerView: 'auto',
                scrollbarHide: false
            },
            navList: [
                {name: '在线约车', img: '/static/images/car-icon.png'},
                {name: '练车日程', img: '/static/images/calendar-icon.png'},
                {name: '约车订单', img: '/static/images/order-icon.png'}
            ],
            videoList: [
                {name: '科目一考试视频，妈妈再也不用担心我挂科了', img: '/static/images/dome/s1.jpg', url: ''},
                {name: '科目一考试视频，妈妈再也不用担心我挂科了', img: '/static/images/dome/s1.jpg', url: ''},
                {name: '科目一考试视频，妈妈再也不用担心我挂科了', img: '/static/images/dome/s1.jpg', url: ''},
                {name: '科目一考试视频，妈妈再也不用担心我挂科了', img: '/static/images/dome/s1.jpg', url: ''}
            ],
            questionList: [
                {title: '常见问题1常见问题1常见问题1常见问题1常见问题1常见问题1常见问题1', url: ''},
                {title: '常见问题1', url: ''},
                {title: '常见问题1', url: ''},
                {title: '常见问题1', url: ''},
                {title: '常见问题1', url: ''}
            ],
            darenList: [
                {name: '达人', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '王尼玛', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '王尼玛001', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '达人王尼玛', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '达人', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '王尼玛', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '王尼玛001', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '达人王尼玛', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '达人', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '王尼玛', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '王尼玛001', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '达人王尼玛', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '达人', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '王尼玛', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '王尼玛001', img: '/static/images/dome/d1.jpg', url: ''},
                {name: '达人王尼玛', img: '/static/images/dome/d1.jpg', url: ''}
            ],
            newsList: [
                {title: '掌握以下技巧，手动档起步又快还不熄火！掌握以下技巧，手动档起步又快还不熄火！掌握以下技巧，手动档起步又快还不熄火！', url: '', img: '/static/images/dome/n1.jpg'},
                {title: '掌握以下技巧，手动档起步又快还不熄火！', url: '', img: '/static/images/dome/n1.jpg'}
            ]
        }
    },
    mounted () {
    },
    methods: {
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss" scoped>
@import '../../static/style/mixin';
.s1 {
    .nav {
        background-color: #fff;
        border-bottom: border();
        a {
            display: block;
            text-align: center;
            border-right: border();
            &:last-child {
                border-right: none;
            }
            .img {
                display:flex;
                align-items:flex-end;
                height: rem(115px);
                padding: 0 32%;
            }
            p {
                font-size: rem(25px);
                color: #3f3f3f;
                padding: rem(15px) 0 rem(25px);
            }
        }
    }
    .groups {
        font-size: rem(30px);
        line-height: rem(47px);
        .icon-video {
            background-position: 0 rem(-37px);
        }
        .icon-questions {
            background-position: 0 rem(-83px);
        }
        .icon-bbs {
            background-position: 0 rem(-129px);
        }
        .icon-skill {
            background-position: 0 rem(-175px);
        }
    }
    .video {
        padding: rem(30px) rem(15px) rem(10px);
        background-color: #fff;
        li {
            width: 50%;
            padding: 0 rem(15px);
            float: left;
            .img {
                width: 100%;
                height: rem(189px);
                border-radius: rem(10px);
                position: relative;
                overflow: hidden;
                &:before {
                    font-size: rem(40px);
                    color: #fff;
                    @include relativeCenter();
                    z-index: 2;
                }
                &:after {
                    position: absolute;
                    content: '';
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 1;
                    background-color: rgba(0, 0, 0, .5);
                }
            }
            p {
                font-size: rem(26px);
                margin: rem(18px) 0;
                @include lineClamp(1);
            }
        }
    }
    .information {
        background-color: #fff;
        padding: rem(15px) 0;
        a {
            display: block;
            font-size: rem(26px);
            height: rem(55px);
            line-height: rem(55px);
            padding: 0 rem(30px);
            @include lineClamp(1);
        }
    }
    .bbs {
        background-color: #fff;
    }
    .daren {
        border-bottom: border();
        .swiper-slide {
            width: rem(126px);
            height: rem(180px);
        }
        a {
            display: inline-block;
            width: rem(96px);
            height: rem(180px);
            padding: rem(23px) rem(15px) 0;
            text-align: center;
            position: relative;
            .icon-daren {
                position: absolute;
                right: rem(3px);
                top: rem(85px);
                width: rem(42px);
                height: rem(42px);
                background-position: rem(-48px) rem(-37px);
            }
            img {
                width: rem(94px);
                border-radius: 100%;
                border: border(1px, solid, #313131);
            }
            p {
                @include lineClamp(1);
            }
        }
    }
    .news {
        background-color: #fff;
        a {
            padding: rem(25px);
            border-bottom: border();
            .img {
                width: rem(242px);
            }
            .info {
                width: rem(420px);
                margin-right: rem(45px);
                .title {
                    @include lineClamp(2);
                }
                p {
                    margin-top: rem(35px);
                }
                i {
                    font-size: rem(26px);
                }
            }
        }
    }
}
</style>
