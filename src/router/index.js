import Vue from 'vue'
import Router from 'vue-router'
// 默认主页
import home from '@/components/home'
// 城市选择
import city from '@/components/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/city',
      component: city
    }
  ]
})
