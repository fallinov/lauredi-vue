<script setup>
defineProps({
  nom: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1>Fiche utilisateur</h1>
  <p>Nom : {{ nom }}</p>
</template>
