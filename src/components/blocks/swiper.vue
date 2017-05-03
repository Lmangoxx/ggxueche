<template>
  <div class="swiper-wrapper">
    <div class="swiper-slide">slider1</div>
    <div class="swiper-slide">slider2</div>
    <div class="swiper-slide">slider3</div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'swiper',
    props: ['data', 'options'],
    data () {
      return {
      }
    },
    mounted () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../style/mixin';
  .home-cell {
    
  }
  .banner-cell {
    position: relative;
    text-align: center;
    .city {
      position: absolute;
      top: pxTorem(15px);
      left: pxTorem(15px);
      height: pxTorem(45px);
      line-height: pxTorem(45px);
      border-radius: pxTorem(45px);
      padding: 0 pxTorem(12px);
      background-color: rgba(0,0,0,.3);
      font-size: pxTorem(24px);
      color: #fff;
    }
  }
</style>
