<template>
<el-menu class="el-menu-vertical-demo" :unique-opened="true" :default-active="$route.path" :router="true" :collapse="$root.settings.sidebarToggler" v-if="navLists.length > 0">
    <el-submenu v-for="nav in navLists" :index="nav.code" v-if="nav.subNav.length > 0" :key="nav.code">
        <template slot="title">
            <i :class="nav.icon"></i>
            <span slot="title">{{nav.name}}</span>
        </template>
        <template v-for="menu in nav.subNav">
            <el-menu-item :index="menu.code" :key="menu.code">
                {{menu.name}}
            </el-menu-item>
        </template>
    </el-submenu>
</el-menu>
</template>

<script>
import 'jquery-slimscroll'
export default {
    name: 'sidebarPage',
    props: {
        navLists: {
            type: Array,
            default: []
        }
    },
	data () {
		return {
		}
	}
}
</script>
<style lang="scss" scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 200px;
	    min-height: 400px;
	}
</style>
