<script setup>
// Tableau des réalisations
import FicheRealisation from "@/components/FicheRealisation.vue";

const realisations = [
 {
  image: 'numbers-01.jpg',
  titre: 'Tableau le chiffre 1',
  description: 'Expérimentation de couleurs'
 },
 {
  image: 'numbers-02.jpg',
  titre: 'Tableau le chiffre 2',
  description: 'Jeu de fondus'
 },
 {
  image: 'numbers-06.jpg',
  titre: 'Tableau le chiffre 6',
  description: '80\'s style'
 },
 {
  image: 'numbers-09.jpg',
  titre: 'Tableau le chiffre 9',
  description: 'Travail avec les pinceaux'
 },
 {
  image: 'numbers-12.jpg',
  titre: 'Tableau le chiffre 12',
  description: 'Répétition de formes'
 }
]


</script>

<template>
  <main>
    <!-- Titre principal du site, il ne doit y en avoir qu'un dans la page et
       il faut le placer dans <main> -->
    <h1>Mes réalisations</h1>

    <ul class="realisations">
      <fiche-realisation
        v-for="realisation in realisations"
        :key="realisation.image"
        :image="realisation.image"
        :titre="realisation.titre"
        :description="realisation.description"
       />
    </ul>
  </main>
</template>

<style scoped>
.realisations {
  list-style-type: none; /* suppression des puces */
  margin: 0;
  padding: 0;
}
</style>
