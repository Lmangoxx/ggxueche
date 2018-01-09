import Vue from 'vue'
import Router from 'vue-router'

const layout = r => require.ensure([], () => r(require('@/page/operation')), 'operation')
const template = {template: '<router-view></router-view>'}
const login = r => require.ensure([], () => r(require('@/page/login/index')), 'login')
const notFound = r => require.ensure([], () => r(require('@/page/notFound')), 'notFound')
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')
const terminalDeviceSettingMamanger = r => require.ensure([], () => r(require('@/page/terminalDeviceSettingMamanger')), 'terminalDeviceSettingMamanger')
const schoolMamanger = r => require.ensure([], () => r(require('@/page/schoolMamanger')), 'schoolMamanger')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/operation'
        },
        {
            meta: {name: '首页'},
            path: '/operation',
            component: layout,
            children: [
                {
                    path: '/',
                    redirect: 'home'
                },
                {
                    path: 'home',
                    component: home
                }
            ]
        },
        {
            mate: {name: '登录'},
            path: '/login',
            component: login
        },
        {
            meta: {name: '驾校业务'},
            path: '/serviceschool',
            component: layout,
            children: [
                // 终端控制
                {
                    meta: {name: '终端控制'},
                    path: 'terminalDeviceSetting',
                    component: template,
                    children: [
                        {
                            path: '/',
                            redirect: 'mamanger'
                        },
                        {
                            path: 'mamanger',
                            component: terminalDeviceSettingMamanger
                        }
                    ]
                },
                // 驾校管理
                {
                    meta: {name: '驾校管理'},
                    path: 'school',
                    component: template,
                    children: [
                        {
                            path: '/',
                            redirect: 'mamanger'
                        },
                        {
                            path: 'mamanger',
                            component: schoolMamanger
                        }
                    ]
                }
            ]
        },
        {
            path: '/404',
            component: notFound
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }
})
