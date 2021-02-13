import Vue from 'vue';
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';
import Login from './views/Login.vue';
import Admin from './views/Admin.vue';
import Create from './views/Create.vue';
import * as firebase from 'firebase/app';
import 'firebase/auth'

// import Store from '@/store'
import VueRouter from 'vue-router';

Vue.use(VueRouter);



const routes = [
    {
        path: '/',
        name: "home",
        component: Home
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/admin',
        name: 'name',
        component: Admin,
        meta: {
            auth: true
        }
    },
    {
        path: '/create',
        name: 'create',
        component: Create,
        meta: {
            auth: true
        }
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some( record => record.meta.requiresAuth);
    const isAuthenticated = firebase.default.auth().currentUser;
    console.log("isauthenticated", isAuthenticated)
    if(requiresAuth && !isAuthenticated){
        next({
            path: '/login'
        })
    }else {
        next()
    }
});

export default router