import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';
import Login from './views/Login.vue';
import Admin from './views/Admin.vue';

import Store from '@/store'

Vue.use(Router);


const router = new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/admin',
            component: Admin,
            meta: {
                auth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.meta.auth && !Store.state.user){
        next({
            path: '/'
        })
    }else {
        next()
    }
})

export default router