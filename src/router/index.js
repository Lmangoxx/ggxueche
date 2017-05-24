import Vue from 'vue'
import Router from 'vue-router'

import home from '@/page/home'
import city from '@/page/city'
import learn from '@/page/learn'
import s1 from '@/page/s1'
import s2 from '@/page/s2'
import s3 from '@/page/s3'
import s4 from '@/page/s4'
import so from '@/page/so'

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
