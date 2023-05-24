<script setup></script>

<template>
  <main class="page-contact">
    <!-- Titre principal du site, il ne doit y en avoir qu'un dans la page et
       il faut le placer dans <main> -->
    <h1>Me contacter</h1>

    <section class="col1">
      <h2>Informations générales</h2>

      <p>
        Actuellement, je ne cherche pas forcément de nouveaux travaux, mais je reste ouvert à toutes
        propositions. Si vous avez des questions n'hésitez pas à me contacter !
      </p>

      <p>
        Appelez-moi sur mon mobile uniquement pour les demandes urgentes. Sinon, Twitter et email
        restent les meilleures façons de me joindre.
      </p>
    </section>
    <section class="col2">
      <h2>Informations de contact</h2>

      <ul class="contact-info">
        <li>
          <a href="tel:0741234567">074 123 45 67</a>
        </li>
        <li>
          <a href="mailto:laure@dinateur.com">laure@dinateur.com</a>
        </li>
        <li>
          <a href="https://twitter.com/lauredi">@lauredi</a>
        </li>
        <li>
          <a href="https://www.facebook.com/laure.dinateur">facebook</a>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
/***********************
****** PAGE CONTACT ****
************************/

.contact-info {
  list-style: none;
  padding: 0;
  margin: 0 0 0 10px;
}

.contact-info li {
  margin-bottom: 0.5em;
}

.contact-info li a {
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 0 2px;

  padding: 0 0 0 30px;
}

/*
Sélecteur d'attribut CSS
http://www.w3schools.com/css/css_attribute_selectors.asp
    - commence par   ^=
    - contient       *=
    - se termine par $=
*/

.contact-info li a[href^='tel'] {
  background-image: url('../../templates/img/phone.png');
}

.contact-info li a[href^='mailto'] {
  background-image: url('../../templates/img/mail.png');
}

.contact-info li a[href*='twitter'] {
  background-image: url('../../templates/img/twitter.png');
}

.contact-info li a[href*='facebook'] {
  background-image: url('../../templates/img/facebook.png');
}

/* Pour les écrans >= 480px */
@media only screen and (min-width: 480px) {
  .page-contact .col1,
  .page-contact .col2 {
    display: inline-block;
    vertical-align: top;
    width: 50%;
  }

  .page-contact .col2 {
    width: 40%;
    margin-left: 10%;
  }
} /* min-width: 480px */
</style>
