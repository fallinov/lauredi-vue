<script setup></script>

<template>
  <header>
    <!-- Logo du site -->
    <router-link class="logo" to="/">
      <div class="nom">Laure Dinateur</div>
      <div class="metier">Graphiste</div>
    </router-link>
    <nav>
      <!-- Menu de navigation -->
      <ul>
        <li>
          <router-link to="/" exact-active-class="actif">Accueil</router-link>
        </li>
        <li>
          <router-link to="/infos" exact-active-class="actif">Qui suis-je ?</router-link>
        </li>
        <li>
          <router-link to="/contact" exact-active-class="actif">Me contacter</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #011627;
  padding: 5px 0 0 0;
  margin: 0 0 30px 0;
}

header .logo {
  text-align: center;
  margin: 0;
}

header .nom {
  color: #2ec4b6;
  font-size: 1.75rem;
  margin: 15px 0;
  line-height: 0.8;
}

header .metier {
  color: #e71d36;
  margin: -5px 0 0; /*-5px haut 0 g/d 0 bas */
}

/***********************
******** NAV MENU ******
************************/
header nav {
  text-align: center;
  padding: 10px 0;
  margin: 20px 0 0;
}

header nav ul {
  list-style: none;
  margin: 0 10px;
  padding: 0;
}

header nav ul li {
  display: inline-block;
}

header nav a,
header nav a:visited {
  color: #fdfffc;
  padding: 15px 10px;
  font-weight: 800;
}

header nav a.actif,
header nav a:hover {
  color: #2ec4b6;
}

header nav a[href='/'] {
  display: none;
}

/* Pour les écrans >= 660px */
@media screen and (min-width: 660px) {
  header {
    border-bottom: 5px solid #2ec4b6;
  }

  header .logo {
    display: inline-block;
    vertical-align: top;
    text-align: left;
    width: 42%;
    margin-left: 5%;
  }

  header .logo .nom {
    font-size: 2.5rem;
  }

  header .logo .metier {
    margin-bottom: 20px;
  }

  header nav {
    display: inline-block;
    vertical-align: top;
    text-align: right;
    width: 48%;
    margin-right: 5%;
    font-size: 1.125rem;
  }
}

/* Pour les écrans >= 910px
    - Afficher le lien vers l'accueil: index.html
*/
@media screen and (min-width: 910px) {
  /* affiche le lien accueil */
  header nav a[href='/'] {
    display: inline;
  }
}
</style>
