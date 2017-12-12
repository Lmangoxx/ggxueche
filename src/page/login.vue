<!-- 登录界面模版 -->
<template>
<div>
    <div class="login-cell" @keyup.enter="login()">
        <h2 class="mb-20">{{$root.settings.name}}</h2>
        <el-input
            class="username"
            type="text"
            v-model="username"
            placeholder="用户名">
        </el-input>
        <el-input
            class="password"
            type="password"
            v-model="password"
            placeholder="密码">
        </el-input>
        <el-button
            class="w-100 mt-20"
            type="success"
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
            <router-link :to="''">忘记密码？</router-link>
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
                checked: false,
                menuList: []
            }
        },
        mounted () {
        },
        methods: {
            login () {
                if (this.username && this.password) {
                    this.$http.post('/login', {
                        username: this.username,
                        password: this.password
                    }).then((response) => {
                        if (response.body.code === 0) {
                            // 登录成功后跳转到访问页或者主页
                            this.$router.push(this.$root.temporaryUrl)
                            this.$message({
                                type: 'success',
                                message: '登录成功'
                            })
                        } else {
                            this.$message.error(response.body.msg)
                        }
                    })
                } else {
                    this.$message.error('用户名、密码不能为空')
                }
            }
        }
    }
</script>

<style lang="scss">
@import '../../static/style/mixin';
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
    width: 380px;
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
        background-color: rgba(255, 255, 255, .9);
        border: none;
    }
    .username .el-input__inner {
        border-bottom: 1px solid rgb(227,227,227);
        border-radius: 4px 4px 0 0;
    }
    .password .el-input__inner {
        border-radius: 0 0 4px 4px;
    }
}
</style>
