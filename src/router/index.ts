import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Order from '../views/Order.vue'
import Orders from '../views/Orders.vue'

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
  { path: '/cart', component: Cart },
  { path: '/order', component: Order },
  { path: '/orders', component: Orders },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
  // {
  //   path: '/todos',
  //   name: 'todos',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/TodosView.vue')
  // },

  // {
  //   path: '/todos',
  //   name: 'Todos',
  //   component: Todos
  // },
  // {
  //   path: '/todos/create',
  //   name: 'TodoCreate',
  //   component: TodoCreate
  // },
  // {
  //   path: '/todos/:id',
  //   name: 'Todo',
  //   component: Todo
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
