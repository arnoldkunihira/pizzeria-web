import { createRouter, createWebHistory } from "vue-router"

import Register from '../components/Register.vue';
import Login from '../components/Login.vue';

const routes = [
    {
        path: '/register',
        name: 'register',
        component: Register
    },

    {
        path: '/login',
        name: 'login',
        component: Login
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router