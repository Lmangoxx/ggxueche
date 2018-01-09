<template>
<el-menu class="el-menu-vertical-demo" mode="vertical" :unique-opened="true" :default-active="$route.path" :collapse="$root.settings.sidebarToggler">
    <el-submenu :index="'/' + nav.code" v-for="nav in navLists" v-if="nav.subNav.length > 0" :key="nav.code">
        <template slot="title">
            <i :class="nav.icon"></i>
            <span slot="title">{{nav.name}}</span>
        </template>
        <template v-for="menu in nav.subNav">
            <el-menu-item :index="'/' + menu.code" :key="menu.code">
                <router-link class="nav-link" :to="'/' + menu.code" tag="em">
                    {{menu.name}}{{$route.path === ('/'+menu.code)}}
                </router-link>
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
