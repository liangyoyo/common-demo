// 引入vue
import Vue from 'vue'
// 引入vue-router
import Router from 'vue-router'
// 引入各个组件
import Home from './views/home'
import Login from './views/login'
// 使用路由
Vue.use(Router)
// 创建路由对象
export default new Router({
  // 添加路由配置
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'login' }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      // 添加路由重定向
      redirect: {},
      // 添加嵌套路由
      children: [
        {
          name: 'about',
          path: 'about',
          // 懒路由配置,用到才加载该组件
          component: () => import(/* webpackChunkName:"about" */'./views/about.vue')
        }
      ]
    }
  ]
})
