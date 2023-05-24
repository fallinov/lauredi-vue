<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Informations | Laure Dinateur'
})
</script>

<template>
  <main class="page-infos">
    <img
      class="profile-photo"
      src="img/laure-dinateur-graphiste.jpg"
      alt="Photo de Laure Dinateur"
    />
    <!-- Ne pas oublier le texte alternatif ALT des images -->

    <!-- Titre principal du site, il ne doit y en avoir qu'un dans la page et
       il faut le placer dans <main> -->
    <h1>
      Laure Dinateur <br />
      Présentation
    </h1>

    <p>
      Hello, je suis <strong>Laure Dinateur</strong> ! Bienvenue sur mon portfolio ou je partage mes
      réalisations favorites.
    </p>

    <p>
      Quand je ne dessine pas, j'aime faire du sport, jouer à des jeux vidéos, boire un bon café ou
      quelque chose de plus corsé.
    </p>

    <p>
      Vous pouvez me suivre sur Twitter, mon nom d'utilisateur est
      <a href="https://twitter.com/lauredi">@lauredi</a>.
    </p>
  </main>
</template>

<style scoped>
.profile-photo {
  display: block;
  max-width: 150px;
  margin: 0 auto 30px;
  border-radius: 50%;
}

h1 {
  text-align: center;
}

/* Pour les écrans >= 480px */
@media only screen and (min-width: 480px) {
  /* Habillage flottant pour l'image de la page infos*/
  .profile-photo {
    float: left; /* pas oublier overflow: auto au parent */
    margin: 0 5% 20px 0;
  }
} /* min-width: 480px */
</style>
