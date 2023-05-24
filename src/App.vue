<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/">Accueil</RouterLink>
  -
  <RouterLink to="/infos">Informations</RouterLink>
  -
  <RouterLink to="/contact">Nous contacter</RouterLink>

  <RouterView />
</template>

<style scoped lang="sass">

</style>
