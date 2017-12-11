import Vue from 'vue'
import Router from 'vue-router'

const login = r => require.ensure([], () => r(require('@/page/login')), 'login')
const operation = r => require.ensure([], () => r(require('@/page/operation')), 'operation')
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')

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
                }
            ]
        }
    ]
})
