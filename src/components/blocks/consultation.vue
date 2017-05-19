<!-- 咨询按钮 -->
<template>
<div class="consultation box-sizing" :class="choose" :style="{
    'top': s[1] + 'px',
    'left': s[0] + 'px'
}">
    <i class="icon-earphones-alt">咨询</i>
</div>
</template>

<script>
export default {
    name: 'consultation',
    data () {
        return {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight,
            o: [],
            s: [],
            choose: '',
            setInter: null
        }
    },
    mounted () {
        this.$el.addEventListener('touchstart', this.touchStart, false)
        this.$el.addEventListener('touchmove', this.touchMove, false)
        this.$el.addEventListener('touchend', this.touchEnd, false)
    },
    methods: {
        touchStart (event) {
            console.log(this.$root)
            let touches = event.touches[0]
            let time = 0
            this.setInter = setInterval(() => {
                time >= 2 ? this.$el.style.display = 'none' : time += 1
            }, 1000)
            this.choose = 'choose'
            this.o = [touches.clientX - this.$el.offsetLeft, touches.clientY - this.$el.offsetTop]
        },
        touchMove (event) {
            clearInterval(this.setInter)
            event.preventDefault()
            let touches = event.touches[0]
            this.s = [touches.clientX - this.o[0], touches.clientY - this.o[1]]
        },
        touchEnd (event) {
            clearInterval(this.setInter)
            this.choose = ''
            if (this.s[0] < (this.w / 2)) {
                this.$set(this.s, 0, 10)
            } else if (this.s[0] > (this.w / 2)) {
                this.$set(this.s, 0, this.w - this.$el.offsetWidth - 10)
            }
            if (this.s[1] < 0) {
                this.$set(this.s, 1, 10)
            } else if (this.s[1] > (this.w + this.$el.offsetHeight)) {
                this.$set(this.s, 1, this.h - this.$el.offsetHeight - 10)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.consultation {
    position: fixed;
    bottom: rem(130px);
    right: rem(40px);
    width: rem(105px);
    height: rem(105px);
    text-align: center;
    color: #fff;
    padding-top: rem(17px);
    border-radius: rem(105px);
    background-color: rgba(254, 98, 83, 1);
    box-shadow: 0 0 rem(10px) rgba(254, 98, 83, 1);
    transition: .3s;
    z-index: 99999;
    user-select:none;
    i {
        font-size: rem(22px);
        &:before {
            display: block;
            font-size: rem(40px);
        }
    }
    &.choose {
        transition: 0s;
    }
    &:active {
        background-color: rgba(254, 98, 83, .8);
    }
}
</style>
