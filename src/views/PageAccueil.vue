<script setup>
// Tableau des réalisations
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
      <li
          v-for="reali in realisations"
          :key="reali.titre"
      >
        <a :href="'img/' + reali.image">
          <figure>
            <img :src="'img/' + reali.image" :alt="reali.titre" />
            <figcaption>{{ reali.description }}</figcaption>
          </figure>
        </a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.realisations {
  list-style-type: none; /* suppression des puces */
  margin: 0;
  padding: 0;
}

.realisations li {
  display: inline-block;
  width: 45%;
  margin: 2.5%;
  vertical-align: top;
}

.realisations li a {
  color: #011627;
}

.realisations figure {
  margin: 0;
  background-color: #e7e9eb;
}

.realisations figcaption {
  padding: 10px;
  font-size: 1rem;
}

/* Pour les écrans >= 480px */
@media only screen and (min-width: 480px) {
  /*Passage sur 3 cols*/
  .realisations li {
    width: calc(100% / 3 - 5%);
  }
}
</style>
