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
        <li class="flex"><router-link :to="''">
          <span></span>
          咨询客服
        </router-link></li>
        <li class="flex"><router-link :to="''">
          <span></span>
          年龄要求
        </router-link></li>
        <li class="flex"><router-link :to="''">
          <span></span>
          身体条件
        </router-link></li>
        <li class="flex"><router-link :to="''">
          <span></span>
          准备材料
        </router-link></li>
        <li class="flex"><router-link :to="''">
          <span></span>
          注意事项
        </router-link></li>
      </ul>
      <!-- nav-cell / -->
      <!-- find-cell -->
      <ul class="find-cell display-flex mt-10">
        <li class="flex"><router-link :to="''">
          <span><img src="../images/icon-school.png" alt=""></span>
          找驾校
        </router-link></li>
        <li class="flex"><router-link :to="''">
          <span><img src="../images/icon-coach.png" alt=""></span>
          找教练
        </router-link></li>
      </ul>
      <!-- find-cell / -->
      <!-- school-list-cell -->
      <div class="school-list-cell mt-10">
        <ul class="nav display-flex">
          <li class="choose flex">推荐</li>
          <li class="flex">距离</li>
          <li class="flex">价格</li>
          <li class="flex">好评</li>
        </ul>
        <ul class="con">
          <li class="mb-10"><router-link :to="''">
            
          </router-link></li>
        </ul>
      </div>
      <!-- school-list-cell / -->
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import footNav from './blocks/footNav'
  export default {
    name: 'home',
    data () {
      return {
        swiperList: [
          'http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/three_sisters_wilderness_0.jpg',
          'http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/three_sisters_wilderness_0.jpg'
        ],
        swiperOption: {
          pagination: '.swiper-pagination'
        },
        borderColors: ['#f33422', '#ff9c00', '#00cdaa', '#009cff', '#7400d6', '#e740d9']
      }
    },
    mounted () {
      this.$http.post('/login', {
        username: 'admin',
        password: 'admin'
      }).then((response) => {
        console.log(response.body)
      })
      this.$http.get('/res/schoolQuota/listQuota', {
        params: {
          pageNumber: 1,
          pageSize: 20
        }
      }).then((response) => {
        console.log(response.body)
      })
    },
    components: {
      swiper,
      swiperSlide,
      footNav
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
        padding: rem(22px) 0;
        font-size: rem(20px);
        color: #626262;
        &:active {
          background-color: #f3f3f3;
        }
        span {
          display: block;
          width: rem(76px);
          height: rem(76px);
          margin: 0 auto rem(22px);
          background-image: url(../images/home-nav.png);
          background-size: rem(76px) rem(380px);
        }
      }
      &:nth-child(1) span{
        background-position: 0 0;
      }
      &:nth-child(2) span{
        background-position: 0 -1 *rem(76px);
      }
      &:nth-child(3) span{
        background-position: 0 -2 *rem(76px);
      }
      &:nth-child(4) span{
        background-position: 0 -3 *rem(76px);
      }
      &:nth-child(5) span{
        background-position: 0 -4 *rem(76px);
      }
    }
  }
  .find-cell {
    background-color: #fff;
    li {
      line-height: rem(80px);
      &:nth-child(1){
        border-right: border(1px);
      }
      a {
        display: block;
        font-size: rem(32px);
        color: #626262;
        padding: rem(13px) 0;
        &:active {
          background-color: #f3f3f3;
        }
      }
      span {
        display: inline-block;
        width: rem(80px);
        padding: 0 rem(30px) 0 rem(40px);
      }
    }
  }
  .school-list-cell {
    background-color: #fff;
    .nav {
      padding: rem(20px) 0 rem(15px);
      border-bottom: border(1px);
      li {
        width: 25%;
        font-size: rem(26px);
        color: #3f3f3f;
        text-align: center;
        border-right: border(1px);
        &.choose {
          color: #0dc0a2;
        }
        &:last-child {
          border: none;
        }
      }
    }
    .con {
      li {
        background-color: #fff;
      }
    }
  }
</style>
