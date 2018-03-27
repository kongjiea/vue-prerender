import Vue from 'vue'
import Router from 'vue-router'


/*import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'*/


// 按需加载写法1
/*const HelloWorld = resolve => require(['./../components/HelloWorld.vue'],resolve);
const Login = resolve => require(['./../components/Login.vue'],resolve);*/


// 按需加载写法2   【推荐】
const HelloWorld = () => import('./../components/HelloWorld.vue');
const Login = () => import( './../components/Login.vue');


// 按需加载写法3 把组件按组分块 注意中间的空格 https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
/*const HelloWorld = () => import(/!* webpackChunkName: "group1" *!/  './../components/HelloWorld.vue');
const Login = () => import(/!* webpackChunkName: "group2" *!/  './../components/Login.vue');*/


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
