<template>
<div class="page-cell">
    <el-tabs v-model="activeTabs" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
            1111
        </el-tab-pane>
        <el-tab-pane label="计时平台信息" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="业务设置" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="运营信息" name="fourth"></el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
export default {
    name: 'schoolDetail',
    data () {
        return {
            activeTabs: 'first'
        }
    },
    methods: {
        handleClick () {
        }
    }
}
</script>
