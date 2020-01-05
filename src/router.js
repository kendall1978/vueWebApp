import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Blog from './components/Blog.vue';

Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/blog',
            component: Blog
        }
    ]
});

export default router