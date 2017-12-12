import Vue from 'vue'
import Router from 'vue-router'

const template = {template: '<router-view></router-view>'}
const login = r => require.ensure([], () => r(require('@/page/login')), 'login')
const operation = r => require.ensure([], () => r(require('@/page/operation')), 'operation')
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
            path: '/login',
            component: login
        },
        {
            path: '/operation',
            component: operation,
            children: [
                {
                    path: '',
                    redirect: 'home'
                },
                {
                    path: 'home',
                    component: home
                },
                {
                    path: 'terminalDeviceSetting',
                    component: template,
                    children: [
                        {
                            path: '',
                            redirect: 'mamanger'
                        },
                        {
                            path: 'mamanger',
                            component: terminalDeviceSettingMamanger
                        }
                    ]
                },
                {
                    path: 'school',
                    component: template,
                    children: [
                        {
                            path: '',
                            redirect: 'mamanger'
                        },
                        {
                            path: 'mamanger',
                            component: schoolMamanger
                        }
                    ]
                }
            ]
        }
    ]
})
