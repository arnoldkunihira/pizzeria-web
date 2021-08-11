import { createRouter, createWebHistory } from "vue-router"

import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Products from '../components/Products.vue';

const routes = [
    {
        path: '/',
        name: 'products',
        component: Products
    },

    {
        path: '/register',
        name: 'register',
        component: Register
    },

    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router