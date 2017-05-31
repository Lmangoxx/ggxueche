<template>
<div class="s1">
    <ul class="nav display-flex">
        <router-link tag="li" class="flex" v-for="nav in navList" :to="''" :key="nav">
            <div class="img"><img :src="nav.img" :alt="nav.name"></div>
            <p>{{nav.name}}</p>
        </router-link>
    </ul>
    <p class="groups mt-20"><i class="icon-social-youtube text-main"></i>视频教学</p>
    <ul class="video display-flex">
        <router-link tag="li" class="flex" :to="''" :key="''"></router-link>
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
        li {
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
                padding:  rem(15px) 0 rem(25px);
            }
        }
    }
}
</style>
