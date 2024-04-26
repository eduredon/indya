import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../modules/heros/views/HerosView.vue')
    },
    {
      path: '/hero',
      name: 'hero',
      component: () => import('../modules/heros/views/HeroDetailsView.vue')
    }
  ]
})

export default router
