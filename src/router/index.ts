import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Login from '@/views/Login.vue'
import Todo from '../views/todos/_id.vue'
import TodoCreate from '../views/todos/create/index.vue'
import Todos from '../views/todos/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  // {
  //   path: '/todos',
  //   name: 'todos',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/TodosView.vue')
  // },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/todos/create',
    name: 'TodoCreate',
    component: TodoCreate
  },
  {
    path: '/todos/:id',
    name: 'Todo',
    component: Todo
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
