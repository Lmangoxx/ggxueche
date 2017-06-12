import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('@/page/home')), 'home')
const city = r => require.ensure([], () => r(require('@/page/city')), 'city')
const learn = r => require.ensure([], () => r(require('@/page/learn')), 'learn')
const s1 = r => require.ensure([], () => r(require('@/page/s1')), 's1')
const s2 = r => require.ensure([], () => r(require('@/page/s2')), 's2')
const s3 = r => require.ensure([], () => r(require('@/page/s3')), 's3')
const s4 = r => require.ensure([], () => r(require('@/page/s4')), 's4')
const so = r => require.ensure([], () => r(require('@/page/so')), 'so')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/learn',
            component: learn,
            children: [
                {
                    path: '',
                    redirect: 's1'
                },
                {
                    path: 's1',
                    component: s1
                },
                {
                    path: 's2',
                    component: s2
                },
                {
                    path: 's3',
                    component: s3
                },
                {
                    path: 's4',
                    component: s4
                },
                {
                    path: 'so',
                    component: so
                }
            ]
        },
        {
            path: '/city',
            component: city
        }
    ]
})
