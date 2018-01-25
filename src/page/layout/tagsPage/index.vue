<template>
<div class="tags-cell">
    <router-link v-for="tag in $root.tagsList" :to="tag.code" :key="tag.code">{{tag.name}}</router-link>
</div>
</template>

<script>
export default {
    name: 'tagsPage',
    watch: {
        $route () {
            console.log('this.$root.tagsList')
        }
    }
}
</script>
<style lang="scss" scoped>
.tags-cell {
    margin-left: -$--layout-default;
    margin-right: -$--layout-default;
    margin-right: -$--layout-default;
    margin-bottom: $--layout-default;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
