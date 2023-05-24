<script setup>
defineProps(['image', 'titre', 'description'])
</script>

<template>
  <li>
    <a :href="'img/' + image">
      <figure>
        <img :src="'img/' + image" :alt="titre">
        <figcaption>{{ description }}</figcaption>
      </figure>
    </a>
  </li>
</template>

<style scoped>

li {
 display: inline-block;
 width: 45%;
 margin: 2.5%;
 vertical-align: top;
}

li a {
 color: #011627;
}

figure {
 margin: 0;
 background-color: #e7e9eb;
}

figcaption {
 padding: 10px;
 font-size: 1rem;
}

/* Pour les écrans >= 480px */
@media only screen and (min-width: 480px) {
 /*Passage sur 3 cols*/
 li {
  width: calc(100% / 3 - 5%);
 }
}
</style>
