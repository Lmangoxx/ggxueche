<template>
<div class="header display-flex">
    <span class="back"></span>
    <slot></slot>
    <span class="search"></span>
    <span class="collect"></span>
</div>
</template>

<script>
export default {
    name: 'header',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.header {
    
}
</style>
