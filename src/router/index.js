import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import learn from '@/components/learn'
import city from '@/components/city'

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
            component: learn
        },
        {
            path: '/city',
            component: city
        }
    ]
})
