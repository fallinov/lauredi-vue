<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo">Démo Vue Router</div>
    <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/contact">Nous contacter</RouterLink>
        <RouterLink :to="{ name: 'fiche', params: { nom: 'Jean' }}">Fiche client</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="sass">
  header
    padding: 1rem
    background-color: ghostwhite
    .logo
      font-size: 1.5rem
      font-weight: bold
    nav
      margin-top: 1rem
      a
        margin-right: 1rem
        text-decoration: none
        color: lightseagreen
        &.router-link-active
          text-decoration: underline
      a.router-link-active
        color: darkorange

  main
    padding: 1rem
    border: 4px solid ghostwhite
</style>
