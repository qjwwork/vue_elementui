import Vue from 'vue'
import VueRouter from 'vue-router'//使用路由时，要引入vue-router
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            name:'home',
            component:()=>import('../view/home.vue'),
        },
       
    ]
})