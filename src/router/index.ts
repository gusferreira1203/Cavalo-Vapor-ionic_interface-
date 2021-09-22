import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import ('../views/index.vue')
  },
  {
    path: '/fretes',
    component: () => import ('../views/fretes.vue')
  },
  {
    path: '/user',
    component: () => import ('../views/user.vue')
  },
  {
    path: '/chats',
    component: () => import ('../views/chats.vue')
  },
  {
    path: '/stats',
    component: () => import ('../views/stats.vue')
  },
  {
    path: '/suporte',
    component: () => import ('../views/suporte.vue')
  },
  {
    path: '/perfis',
    component: () => import ('../views/perfis.vue')
  },
  {
    path: '/mapa',
    component: () => import ('../views/mapa.vue')
  },
  {
    path: '/network',
    component: () => import ('../views/network.vue')
  },
  {
    path: '/trucks',
    component: () => import ('../views/trucks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
