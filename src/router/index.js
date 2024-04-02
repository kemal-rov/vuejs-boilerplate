import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import ProductsView from '../views/ProductsView.vue';


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;