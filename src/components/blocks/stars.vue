<!-- 5星评分模块 -->
<template>
    <div class="stars">
        <span class="icon-bg" v-for="star in starList" :key="star" :class="{'choose': num > star}"></span>
    </div>
</template>

<script>
    export default {
        name: 'stars',
        props: ['num'],
        data () {
            return {
                starList: [0, 1, 2, 3, 4]
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.stars {
    span {
        display: inline-block;
        width: rem(17px);
        height: rem(16px);
        background-position: 0 rem(-1px);
        margin-right: 5px;
        &.choose {
            background-position: 0 rem(-18px);
        }
    }
}
</style>
