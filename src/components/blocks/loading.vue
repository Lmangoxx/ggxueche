<template>
<div class="loading-overlay">
    <div class="sk-three-bounce">
        <div class="sk-child sk-bounce1"></div>
        <div class="sk-child sk-bounce2"></div>
        <div class="sk-child sk-bounce3"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'loading',
    data () {
        return {
            showloading: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.loading-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
}
</style>
