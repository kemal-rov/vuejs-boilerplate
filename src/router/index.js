import { createRouter, createWebHistory } from 'vue-router';
// Import your route components here

const routes = [
  // Define your routes here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;