import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blank from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import City from '@/page/City.vue'
import goodsList from '@/page/goodsList.vue'
import Login from '@/page/Login.vue'
import Register from '@/page/Register.vue'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      },{
        path: '/city',
        name: 'City',
        component: City
      },{
        path: 's/:name',
        name: 'goods',
        component: goodsList
      }]
    },
    {
      path: '/blank',
      name: 'blank',
      component: blank,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'register',
        name: 'register',
        component: Register
      }]
    },
  ]
})
