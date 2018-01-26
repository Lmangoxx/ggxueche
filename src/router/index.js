import Vue from 'vue'
import Router from 'vue-router'

const layout = r => require.ensure([], () => r(require('@/page/layout/operation')), 'operation')
const template = {template: '<router-view></router-view>'}
const login = r => require.ensure([], () => r(require('@/page/login/index')), 'login')
const notFound = r => require.ensure([], () => r(require('@/page/notFound/index')), 'notFound')
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')
const terminalDeviceSettingMamanger = r => require.ensure([], () => r(require('@/page/terminalDeviceSetting/mamanger')), 'terminalDeviceSettingMamanger')
const schoolMamanger = r => require.ensure([], () => r(require('@/page/school/mamanger')), 'schoolMamanger')
const schoolDetail = r => require.ensure([], () => r(require('@/page/school/detail')), 'schoolDetail')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/operation'
        },
        {
            path: '/operation',
            component: layout,
            children: [
                {
                    path: '/',
                    redirect: 'home'
                },
                {
                    meta: {name: '首页', tag: true},
                    path: 'home',
                    component: home
                },
                {
                    meta: {name: '404错误'},
                    path: '404',
                    component: notFound
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
							meta: {name: '终端控制', tag: true},
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
                            meta: {name: '驾校管理', tag: true},
                            path: 'mamanger',
                            component: schoolMamanger
                        },
                        {
                            path: 'detail',
                            component: schoolDetail
                        }
                    ]
                }
            ]
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
