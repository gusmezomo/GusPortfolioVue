import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue';

const routes = [
  { path: '/', component: Home }
  // Adicione mais rotas conforme necessário
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset para header fixo
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
});

export default router