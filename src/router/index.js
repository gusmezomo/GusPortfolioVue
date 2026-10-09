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
      // window.scrollTo ignora scroll-padding-top, entao le a altura da navbar da variavel CSS
      const navH = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
      ) || 80
      return {
        el: to.hash,
        behavior: 'smooth',
        top: navH // Offset para header fixo
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
});

export default router