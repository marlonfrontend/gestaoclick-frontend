import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue')
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: () => import('../views/post/PostView.vue')
    }
  ]
})

export default router
