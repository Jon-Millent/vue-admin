
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/home',
      component: ()=> import('../views/layout/main.vue'),
      name: 'home',
      children: [
        {
          path: 'setting',
          component: ()=> import('../views/home/setting.vue'),
          name: 'setting'
        },
        {
          path: 'about',
          component: ()=> import('../views/home/about.vue'),
          name: 'about'
        }
      ]
    }
  ]
})