<template>
<el-menu default-active="/serviceschool/terminalDeviceSetting/mamanger" class="el-menu-vertical-demo" :collapse="$root.settings.sidebarToggler">
    <el-submenu index="/serviceschool">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="/serviceschool/terminalDeviceSetting/mamanger">选项2</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
</el-menu>
</template>

<script>
export default {
    name: 'terminalDeviceSetting',
    data () {
        return {
        }
    },
    mounted () {
    },
    methods: {
    },
    components: {
    }
}
</script>
