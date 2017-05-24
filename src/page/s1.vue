<template>
<div class="s1">
    <ul class="nav display-flex">
        <li class="flex">
            <div class="img"><img v-lazy="'/static/images/car-icon.png'" alt=""></div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 's1',
    data () {
        return {
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
        border-top: border();
        border-bottom: border();
    }
}
</style>
