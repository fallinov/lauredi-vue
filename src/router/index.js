import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from "@/views/AccueilView.vue";
import ContactView from "@/views/ContactView.vue";
import FicheView from "@/views/FicheView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/fiche/:nom',
      name: 'fiche',
      component: FicheView,
      props: true
    }
  ]
})

export default router
