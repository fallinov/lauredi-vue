import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from "@/views/PageAccueil.vue";
import PageContact from "@/views/PageContact.vue";
import PageInformations from "@/views/PageInformations.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: PageAccueil
    },
    {
      path: '/contact',
      name: 'contact',
      component: PageContact
    },
    {
      path: '/infos/',
      name: 'infos',
      component: PageInformations,
    }
  ]
})

export default router
