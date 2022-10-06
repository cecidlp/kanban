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
    component: () => import('./components/ToDoListComponent.vue'),
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
  {
    path: '/todolist',
    name: 'TodoList',
    component: () => import('./components/ToDoListComponent.vue'),
  },
  {
    path: '/menuTodo',
    name: 'menuTodo',
    component: () => import('./components/MenuTodoComponent.vue'),
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
