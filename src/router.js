import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Blog from './components/Blog.vue';
import project from './components/projects/projects.vue';

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
        },
        {
            path: '/projects',
            component: project
        }
    ]
});

export default router