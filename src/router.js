import Vue from 'vue';
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';
import Login from './views/Login.vue';
import Admin from './views/Admin.vue';
import Create from './views/Create.vue';
import FourOhFour from './views/FourOhFour.vue';
import RouterPassThrough from "./components/RouterPassThrough.vue";
import { store } from "./store";


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
        component: RouterPassThrough,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'admin',
                component: Admin
            },
            {
                path: 'create',
                name: 'create',
                component: Create
            }

        ]
    },
    {
        path: '/*',
        name: '404',
        component: FourOhFour
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some( record => record.meta.requiresAuth);
    const isAuthenticated = store.state.user.loggedIn;
    if(requiresAuth && !isAuthenticated){
        next({
            path: '/login'
        })
    }else {
        next()
    }
});

export default router