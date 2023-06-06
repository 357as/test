import VueRouter from "vue-router";
import store from "../JS/stroe"
// VueRouter 路由器
const routers = new VueRouter({
    //区别history路径不带#，比较美观
    // history模式，刷新后会把路径当作接口资源，但hash模式不会
    mode: "history",
    //routers 路由
    routes: [{
        path: '/',
        component: () => import('../App.vue'),
    }, {
        path: '/login',
        component: () => import('../components/login.vue'),
        name: 'login',
        beforeEnter: (to, from, next) => {
            if (store.state.userinfo.islogin) {
                next({ name: 'home' })
            } else {
                next()
            }
        }
    }, {
        path: '/content',
        component: () => import('../components/content-box.vue'),
        name: 'content',
        children: [
            {
                path: '/home',
                component: () => import('../components/home.vue'),
                name: 'home',
            }, {
                path: '/user',
                component: () => import('../components/userMangment.vue'),
                name: 'user',
            }, {
                path: '/shop',
                component: () => import('../components/shopMangment.vue'),
                name: 'shop'
            }, {
                path: "/other",
                component: () => import('../components/other.vue'),
                name: "other"
            }
        ],
        beforeEnter: (to, from, next) => {
            if (store.state.userinfo.islogin) {
                next()
            } else {
                next({ name: 'login' })
            }

        }
    }]
})
export default routers