<script setup></script>

<template>
  <main>
    <!-- Titre principal du site, il ne doit y en avoir qu'un dans la page et
       il faut le placer dans <main> -->
    <h1>Mes réalisations</h1>

    <ul class="realisations">
      <li>
        <a href="img/numbers-01.jpg">
          <figure>
            <img src="img/numbers-01.jpg" alt="Tableau le chiffre 1" />
            <figcaption>Expérimentation de couleurs</figcaption>
          </figure>
        </a>
      </li>
      <li>
        <a href="img/numbers-02.jpg">
          <figure>
            <img src="img/numbers-02.jpg" alt="Tableau le chiffre 2" />
            <figcaption>Jeu de fondus</figcaption>
          </figure>
        </a>
      </li>
      <li>
        <a href="img/numbers-06.jpg">
          <figure>
            <img src="img/numbers-06.jpg" alt="Tableau le chiffre 6" />
            <figcaption>80's style</figcaption>
          </figure>
        </a>
      </li>
      <li>
        <a href="img/numbers-09.jpg">
          <figure>
            <img src="img/numbers-09.jpg" alt="Tableau le chiffre 9" />
            <figcaption>Travail avec les pinceaux</figcaption>
          </figure>
        </a>
      </li>
      <li>
        <a href="img/numbers-12.jpg">
          <figure>
            <img src="img/numbers-12.jpg" alt="Tableau le chiffre 12" />
            <figcaption>Répétition de formes</figcaption>
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
