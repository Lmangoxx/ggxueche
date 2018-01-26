<template>
<div class="tags-cell">
    <router-link v-for="tag in tagsList" :to="tag.path" :key="tag.path">{{tag.meta.name}}，</router-link>
</div>
</template>

<script>
export default {
    name: 'tagsPage',
    data () {
        return {
            tagsList: []
        }
    },
    created () {
        if (this.tagsList.length === 0) {
            this.addTag()
        }
    },
    methods: {
        addTag () {
            const vm = this
            if (vm.$route.meta.tag && !vm.tagHas()) {
                vm.tagsList.push(vm.$route)
            }
        },
        tagHas () {
            const vm = this
            let flag = false
            for (let tag of vm.tagsList) {
                if (tag.meta.name === vm.$route.meta.name && tag.path === vm.$route.path) {
                    flag = true
                    break
                }
            }
            return flag
        }
    },
    watch: {
        $route () {
            this.addTag()
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
