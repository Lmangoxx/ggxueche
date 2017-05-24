<template>
<div class="loading-overlay">
    <img src="/static/images/loading.gif">
</div>
</template>

<script>
export default {
    name: 'loading'
}
</script>

<style lang="scss" scoped>
@import '../../static/style/mixin';
.loading-overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: rem(45px);
    border-radius: rem(15px);
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 1);
    z-index: 99999;
    img {
        width: rem(64px);
        height: rem(64px);

    }
}
</style>
