<script setup>

</script>

<template>
  <header>
    <!-- Logo du site -->
    <router-link class="logo" to="/">
      <div class="nom">Laure Dinateur</div>
      <div class="metier">Graphiste</div>
    </router-link><nav><!-- Menu de navigation -->
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
