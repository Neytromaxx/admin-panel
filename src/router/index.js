import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/login',
    name:'login', 
    alias: '/',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta:{
      layout:'main',
    }
  },
  {
    path: '/home/categories',
    name: 'categories',
    component: () => import('../views/CategoriesView.vue'),
    meta:{
      layout:'main'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
