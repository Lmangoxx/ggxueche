<template>
<el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
        v-for="(item, index) in levelList"
        :to="item.path"
        :key="item.path"
    >
        {{item.path.indexOf('/mamanger') > 0 ? '列表' : item.path.indexOf('/edit') > 0 ? '编辑' : item.meta.name}}
    </el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
export default {
    name: 'breadcrumbPage',
	data () {
		return {
            levelList: null
		}
	},
    created () {
        this.getBreadcrumb()
    },
    watch: {
        $route () {
            this.getBreadcrumb()
        }
    },
    methods: {
        getBreadcrumb () {
            this.levelList = this.$route.matched
        }
    }
}
</script>
