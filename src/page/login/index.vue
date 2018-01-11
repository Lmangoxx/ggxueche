<!-- 登录界面模版 -->
<template>
<div>
    <div class="login-cell" @keyup.enter="login()">
        <h2 class="mb-20">{{$root.app.name}}</h2>
        <el-input
            prefix-icon="icon-user"
            class="username"
            type="text"
            v-model="username"
            placeholder="用户名">
        </el-input>
        <el-input
            prefix-icon="icon-lock"
            class="password"
            type="password"
            v-model="password"
            placeholder="密码">
        </el-input>
        <el-row class="mt-20 mb-20">
            <el-col :span="12"><el-checkbox v-model="rememberMe">自动登录</el-checkbox></el-col>
            <el-col :span="12" style="text-align:right;"><router-link :to="''">忘记密码？</router-link></el-col>
        </el-row>
        <el-button
            class="w-100"
            type="primary"
            @click="login()"
        >
            登 录
        </el-button>
        <div class="mt-15 display-flex">
            <div class="flex">
                社交账号：
                <i class="fa fa-qq"></i>
                <i class="fa fa-weixin ml-5"></i>
            </div>
        </div>
    </div>
    <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        :particlesNumber="90"
        shapeType="circle"
        :particleSize="1.5"
        linesColor="#ffffff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="60"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    >
    </vue-particles>
</div>
</template>
<script>
    /**
     * 引入vue版本particles.js特效
     */
    import Vue from 'vue'
    import VueParticles from 'vue-particles'
    Vue.use(VueParticles)
    export default {
        name: 'login',
        data () {
            return {
                username: '',
                password: '',
                rememberMe: true
            }
        },
        methods: {
            login () {
                let vm = this
                if (vm.username && vm.password) {
                    vm.$axios.post('/login', {
                        username: vm.username,
                        password: vm.password,
                        rememberMe: vm.rememberMe
                    })
                    .then(res => {
                        if (res.code === 0) {
                            // 登录成功后跳转到访问页或者主页
                            vm.$router.push(vm.$root.temporaryUrl)
                            vm.$message({
                                type: 'success',
                                message: '登录成功'
                            })
                        } else {
                            vm.$message.error(res.msg)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
                } else {
                    vm.$message.error('用户名、密码不能为空')
                }
            }
        }
    }
</script>

<style lang="scss">
#particles-js {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-image: url("/static/images/bg0"+ floor(random() * 5) +".jpg");
    background-size: cover;
}
.login-cell {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    z-index: 2;
    width: 350px;
    padding: 35px 40px 60px;
    color: #ccc;
    background-color: rgba(50, 50, 50, .6);
    border-radius: 3px;
    &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 15px;
        width: 40px;
        height: 28px;
        margin-left: -20px;
        background-image: url('/static/images/logo_01.png');
        background-position: center bottom;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: .5;
    }
    a {
        color: #ccc;
        transition: all 300ms ease-in-out;
        &:hover {
            color: #fff;
        }
    }
    h2 {
        text-align: center;
        font-size: 22px;
    }
    .el-input__inner {
        border: none;
    }
    .username .el-input__inner {
        border-radius: 4px 4px 0 0;
    }
    .password .el-input__inner {
        border-radius: 0 0 4px 4px;
    }
    .el-checkbox {
        color: #ccc;
    }
    .el-input__prefix {
        left: 8px;
    }
}
</style>
