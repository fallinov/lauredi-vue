<script setup>
import { RouterView } from 'vue-router'
import EnteteDePage from '@/components/EnteteDePage.vue'
import PiedDePage from '@/components/PiedDePage.vue'
</script>

<template>
  <entete-de-page />
  <RouterView />
  <pied-de-page />
</template>

<style scoped lang="sass"></style>
