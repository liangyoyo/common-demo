import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
import store from './store'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入公共样式文件
import './styles/index.css'

// 添加导航守卫
/* router.beforeEach((to, from, next) => {
  // console.log(to)
  // 判断用户是否登陆过或者是否跳转到login页,判断是否存在token值，如果是则继续进行业务操作
  var token = localStorage.getItem('token')
  if (token || to.path === '/login') {
    next()
  } else {
    // 否则,重定向到登陆页
    next({ name: 'login' })
  }
}) */

// 让Vue使用element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
