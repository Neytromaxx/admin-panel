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
  },
  {
    path: '/home/brands',
    name: 'brands',
    component: () => import('../views/BrandsView.vue'),
    meta:{
      layout:'main'
    }
  },
  {
    path: '/home/cities',
    name: 'cities',
    component: () => import('../views/CitiesView.vue'),
    meta:{
      layout:'main'
    }
  },
  {
    path: '/home/locations',
    name: 'locations',
    component: () => import('../views/LocationsView.vue'),
    meta:{
      layout:'main'
    }
  },
  {
    path: '/home/cars',
    name: 'cars',
    component: () => import('../views/CarsView.vue'),
    meta:{
      layout:'main'
    }
  },
  {
    path: '/home/models',
    name: 'models',
    component: () => import('../views/ModelsView.vue'),
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
