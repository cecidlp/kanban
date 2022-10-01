import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./pages/LandingPage.vue'),
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('./pages/ToDoPage.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('./pages/SignInComponent.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('./pages/SignUpComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  },
});

export default router;
