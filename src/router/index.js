import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/home'
import About from '@/components/about/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: "*",
      redirect: "/404",
      component: About
    }
  ]
})
