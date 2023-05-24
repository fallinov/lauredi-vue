import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from '@/views/PageAccueil.vue'
import PageContact from '@/views/PageContact.vue'
import PageInformations from '@/views/PageInformations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: PageAccueil,
      meta: { titre: 'Laure Dinateur | Graphiste' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: PageContact,
      meta: { titre: 'Me contacter | Laure Dinateur' }
    },
    {
      path: '/infos/',
      name: 'infos',
      component: PageInformations,
      meta: { titre: 'Informations | Laure Dinateur' }
    }
  ]
})

// Changement du tire <title> de la page
router.afterEach((to) => {
  document.title = to.meta.titre
})

export default router
