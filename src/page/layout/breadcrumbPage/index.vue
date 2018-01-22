<template>
<el-breadcrumb separator-class="el-icon-arrow-right">
    <transition-group name="fade-out-left">
        <el-breadcrumb-item
            v-for="(item, index) in levelList"
            :to="item.meta.submenu ? '' : item.path"
            :key="item.path"
            v-if="item.path.indexOf('/home') === -1"
        >
            {{item.path.indexOf('/mamanger') > 0 ? '列表' : item.path.indexOf('/detail') > 0 ? '编辑' : item.meta.name}}
        </el-breadcrumb-item>
    </transition-group>
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
			if (this.$route.path.indexOf('/operation') < 0) {
				this.levelList = [{path: '/operation', meta: {name: '首页'}}].concat(this.$route.matched)
			} else {
                this.levelList = this.$route.matched
            }
		}
	}
}
</script>
