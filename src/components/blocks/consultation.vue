<!-- 咨询按钮 -->
<template>
<div class="consultation">
    
</div>
</template>

<script>
export default {
    name: 'consultation'
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.consultation {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: rem(36px) rem(36px);
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
