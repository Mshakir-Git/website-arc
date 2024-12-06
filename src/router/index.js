import { createRouter, createWebHistory } from 'vue-router'
import ArcView from '../views/ArcView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ArcView,
    },
    {
      path: '/basic',
      name: 'basic',
      component: () => import('../views/BasicView.vue'),
    },
    {
      path: '/arc',
      name: 'arc',
      component: () => import('../views/ArcView.vue'),
    },
  ],
})

export default router
