import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
