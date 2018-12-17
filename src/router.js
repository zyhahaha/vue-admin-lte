import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/views/admin/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin
    },
    // {
    //   path: '/content',
    //   name: 'content',
    //   component: () => import(/* webpackChunkName: "content" */ './views/content/index.vue')
    // }
  ]
})
