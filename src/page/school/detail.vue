<template>
<div class="page-cell content-cell">
    <keep-alive include="basicInfo">
    <el-tabs v-model="activeTabs" type="card">
        <el-tab-pane label="基本信息" name="first">
            <basic-info v-if="activeTabs === 'first'"></basic-info>
        </el-tab-pane>
        <el-tab-pane label="计时平台信息" name="second">
            <basic-info v-if="activeTabs === 'second'"></basic-info>
        </el-tab-pane>
        <el-tab-pane label="业务设置" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="运营信息" name="fourth"></el-tab-pane>
    </el-tabs>
    </keep-alive>
</div>
</template>

<script>
import basicInfo from './basicInfo'
export default {
    name: 'schoolDetail',
    data () {
        return {
            activeTabs: 'first'
        }
    },
    components: {
        basicInfo
    }
}
</script>
