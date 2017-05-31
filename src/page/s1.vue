<template>
<div class="s1">
    <ul class="nav display-flex">
        <router-link class="flex" v-for="nav in navList" :to="''" :key="nav">
            <div class="img"><img :src="nav.img" :alt="nav.name"></div>
            <p>{{nav.name}}</p>
        </router-link>
    </ul>
    <div class="groups mt-20 display-flex">
        <i class="icon-social-youtube text-main"></i>
        <span class="pl-20 flex">视频教学</span>
    </div>
    <ul class="video cf">
        <router-link tag="li" class="box-sizing" :to="''" :key="''">
            <div class="img icon-control-play"><img v-lazy="'/static/images/dome/s1.jpg'" alt=""></div>
            <p>科目一考试视频，妈妈再也不用担心我</p>
        </router-link>
        <router-link tag="li" class="box-sizing" :to="''" :key="''">
            <div class="img icon-control-play"><img v-lazy="'/static/images/dome/s1.jpg'" alt=""></div>
            <p>科目一考试视频，妈妈再也不用担心我</p>
        </router-link>
        <router-link tag="li" class="box-sizing" :to="''" :key="''">
            <div class="img icon-control-play"><img v-lazy="'/static/images/dome/s1.jpg'" alt=""></div>
            <p>科目一考试视频，妈妈再也不用担心我</p>
        </router-link>
        <router-link tag="li" class="box-sizing" :to="''" :key="''">
            <div class="img icon-control-play"><img v-lazy="'/static/images/dome/s1.jpg'" alt=""></div>
            <p>科目一考试视频，妈妈再也不用担心我</p>
        </router-link>
    </ul>
</div>
</template>

<script>
export default {
    name: 's1',
    data () {
        return {
            navList: [
                {name: '在线约车', img: '/static/images/car-icon.png'},
                {name: '练车日程', img: '/static/images/calendar-icon.png'},
                {name: '约车订单', img: '/static/images/order-icon.png'}
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
    .icon-social-youtube {
        font-size: rem(38px);
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
                }
            }
            p {
                font-size: rem(22px);
                margin: rem(18px) 0;
                @include lineClamp(1);
            }
        }
    }
}
</style>
