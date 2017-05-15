<template>
<div class="city-cell">
	<headerCell :options="{'back': true, 'search': true}">城市</headerCell>
    <!-- city-gps -->
    <div class="city-gps">
        <p class="groups display-flex">当前定位城市：<em class="flex">定位不准时，请在城市列表中选择</em></p>
        <router-link tag="li" class="groups display-flex" :to="''">
            <span class="flex">北京</span>
            <i class="fa fa-angle-right"></i>
        </router-link>
    </div>
    <!-- city-gps / -->
    <!-- city-hot -->
    <div class="city-hot mt-10">
        <div class="groups">热门城市</div>
        <ul class="city-hot-list cf">
            <router-link tag="li" class="box-sizing" v-for="city in cityList" :to="''" :key="city.id">{{city.name}}</router-link>
        </ul>
    </div>
    <!-- city-hot / -->
</div>
</template>

<script>
import headerCell from './blocks/header'
export default {
	name: 'city',
	data () {
		return {
            cityList: []
		}
	},
	mounted () {
        this.$http.get('/static/data/hotCity.json').then((res) => {
            this.cityList = res.body
            console.log(this.cityList)
        })
    },
    components: {
		headerCell
    }
}
</script>

<style lang="scss" scoped>
@import '../style/mixin';
.city-gps {
    background-color: #fff;
    p {
        em {
            text-align: right;
            color: $sub-color;
        }
    }
    li {
        font-size: rem(30px);
        padding: rem(15px) rem(20px);
        span {
            color: $main-color;
        }
        i {
            font-size: rem(35px);
            color: $sub-color;
            margin-top: rem(3px);
        }
        &:active {
            background-color: $active-color;
        }
    }
}
.city-hot-list {
    background-color: #fff;
    li {
        float: left;
        width: 25%;
        height: rem(65px);
        line-height: rem(65px);
        color: $main-color;
        text-align: center;
        border-right: border(1px);
        border-bottom: border(1px);
        &:nth-child(4n) {
            border-right: none;
        }
        &:active {
            background-color: $active-color;
        }
    }
}
</style>
