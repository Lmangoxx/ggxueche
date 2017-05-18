<template>
<div>
    <div class="learn-cell">
    </div>
    <foot-nav></foot-nav>
</div>
</template>

<script>
import footNav from './blocks/footNav'
export default {
    name: 'home',
    data () {
        return {
        }
    },
    mounted () {
    },
    methods: {
    },
    components: {
        footNav
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/mixin';
.learn-cell {
    height: 100%;
    padding-bottom: rem(110px);
}
</style>
