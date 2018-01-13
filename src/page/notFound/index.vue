<template>
<div class="notFound-cell">
    <div class="newfinno-con"></div>
    <div class="tips">
        <h2 class="b-text">矮油~~您访问的页面不在地球上...</h2>
        <p class="m-box">
            <span class="m-text">休息一下,随便逛逛其他页面吧。</span>
            <router-link to="/">
                <el-button type="primary">返回首页</el-button>
            </router-link>
        </p>
    </div>
</div>
</template>

<script>
export default {
    name: 'notFound'
}
</script>
<style lang="scss" scoped>
.notFound-cell {
    .newfinno-con {
        background: url(/static/images/404.png) center center no-repeat;
        background-size: auto 100%;
        width: 100%;
        height: calc(100vh - 210px);
    }
    .tips {
        margin-top: 10px;
        text-align: center;
        h2{
            font-size: 20px;
            margin-bottom: 10px;
        }
        .m-box{
            width: 295px;
            margin: auto;
        }
        .m-text{
            font-size: 12px;
            line-height: 32px;
        }
    }
}
</style>

