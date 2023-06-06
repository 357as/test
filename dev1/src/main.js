import Vue from 'vue'
//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false

import App from './App.vue'

//axios
import axios from 'axios'
Vue.prototype.$axios = axios

//路由器
// 把router注入vue中
import vueRouter from 'vue-router'
Vue.use(vueRouter)

// 是指路由重复。
const originalPush = vueRouter.prototype.push;
// 修改 原型对象中的push方法
vueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

//引入routerJS文件
import router from './Router/router'

import store from './JS/stroe'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
