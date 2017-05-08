<template>
  <div class="foot-nav display-flex">
    <router-link class="flex" :class="{'choose': $route.path.indexOf('home') !== -1}" :to="'/home'">
      <span></span>报名
    </router-link>
    <router-link class="flex" :class="{'choose': $route.path.indexOf('learn') !== -1}" :to="'/learn'">
      <span></span>学车
    </router-link>
    <router-link class="flex" :class="{'choose': $route.path.indexOf('find') !== -1}" :to="'/find'">
      <span></span>发现
    </router-link>
    <router-link class="flex" :class="{'choose': $route.path.indexOf('my') !== -1}" :to="'/my'">
      <span></span>我的
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'foot-nav'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
      color: #626262;
      padding: rem(17px) 0 rem(10px);
      text-align: center;
      span {
        display: block;
        width: rem(46px);
        height: rem(46px);
        background-image: url(../../images/foot-nav.png);
        background-size: rem(93px) rem(184px);
        margin: 0 auto rem(5px);
      }
      &:nth-child(1) span{
        background-position: 0 0;
      }
      &:nth-child(2) span{
        background-position: 0 -1 *rem(46px);
      }
      &:nth-child(3) span{
        background-position: 0 -2 *rem(46px);
      }
      &:nth-child(4) span{
        background-position: 0 -3 *rem(46px);
      }
      &.choose {
        color: #0cc0a1;
      }
      &:nth-child(1).choose span{
        background-position: - rem(46px) 0;
      }
      &:nth-child(2).choose span{
        background-position: - rem(46px) -1 *rem(46px);
      }
      &:nth-child(3).choose span{
        background-position: - rem(47px) -2 *rem(46px);
      }
      &:nth-child(4).choose span{
        background-position: - rem(46px) -3 *rem(46px);
      }
    }
  }
</style>
