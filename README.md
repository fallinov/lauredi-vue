# Exercice site Laure Dinateur en SPA

## Avant de démarrer l'exercice

1. Cloner ce dépôt 
2. Créer une nouvelle branche. Ex: `steve-étape-1`
3. Télécharger les paquets `npm install`
4. Formater les fichiers `npm run format`
5. Fixer les erreurs de codage `npm run lint`
6. Démarer le serveur de développement `npm run dev`
7. Ouvrir l'application dans le navigateur
   http://localhost:5173/ _(ou autre port indiqué dans la console)_

![etape-0.png](_supports%2Fetape-0.png)

## Commandes utiles
### Télécharger les paquets
```sh
npm install
```

### Démarrer le serveur de développement
```sh
npm run dev
```

### Formatage du code
```sh
npm run format
```

### Compiler et minimiser pour la production
```sh
npm run build
```

### Fixer les erreurs de codage avec [ESLint](https://eslint.org/)
```
npm run lint
```

## Objectifs de l'exercice

Transformer le site de Laure Dinateur https://kode.ch/101/lauredi/ 
en SPA (Single Page Application) en utilisant :
* Vue.js V3 : https://fr.vuejs.org/v2/guide/
* Vue CLI : https://cli.vuejs.org/
* Vue router : https://router.vuejs.org/
* Composants monofichiers

**Vous trouverez une copie du site statique Laure Dinateur
dans le dossier `templates/` de ce projet.**

### Étape 1 - Création des pages et navigation (Vue router)
![etape-1.gif](_supports%2Fetape-1.gif)

> Solution de l'étape sur la branche `E1-fin` de ce dépôt
> ou https://github.com/fallinov/lauredi-vue/tree/E1-fin

* Supprimer le style CSS actuel
  * Supprimer le fichier `src/assets/base.css`
  * Effacer le contenu du fichier `src/assets/main.css`
* Créer les pages `PageAccueil.vue`, `PageContact.vue` et `PageInformations.vue`
  dans `src/views/` avec uniquement un `<h1>` contenant le titre de la page.
* Dans `src/App.vue` :
  * Créer un menu de navigatio en utilisant `<router-link>` pour faire les liens
  * Ajout du `<router-view>` qui affichera la page correspondante à la route définie dans `src/router/index.js`
* Définir les routes dans `src/router/index.js`, et les tester.

### Étape 2 - Intégration des contenus HTML/CSS et images
* Copie des images : copier les images dans : `public/img/`
* Remplacer `public/favicon.ico` par celle de Laure Dinateur
* Importation du CSS :
  * Renommer `templates/css/main.css` en `base.css`
  * Copier les fichiers de `templates/css` dans : `src/assets`
* Dans `src/assets/main.css` importer les fichiers CSS que vous venez de copier
  ```css
  @import "normalize.css";
  @import "base.css";
  @import "responsive.css";
  ```
  ![etape-2-1.png](_supports%2Fetape-2-1.png)
* Modifier `index.html` et modifier le titre du site `<title>Laure Dinateur</title>`
* Création de composants pour l'entête le pied de page
* Ajout du HTML dans l'entête et le pied de page
* Ajout du HTML dans les différentes pages
* Ajout de la classe "actif" au lien actif du menu.
* (optionnel) Ajouter le code CSS spécifique aux pages
  dans les composants de page `PageAccueil.vue`, `PageContact.vue` et `PageInformations.vue`

### Étape 3 - Création d'un tableau des réalisations
* Ajouter le tableau JavaScript des réalisations (image, titre, description) au composant `PageAccueil.vue`
* Vous trouverez le tableau des réalisations dans le fichier `templates/realisations.js`
* Parcourir le tableau pour générer l'affichage des réalisations.

### Étape 4 - Créer un composant `Realisation.vue` 
* Créer un composant représentant une réalisation avec une ou plusieurs propriétés (props)
  lui permettant de recevoir les données de la réalisation.

### Étape 5 - Modifier le titre du document HTML `<title>` 
* Ajouter le lifecycle hook `beforeMount` aux pages `PageAccueil.vue`, `PageContact.vue` et `PageInformations.vue`
* Utiliser `document.title` pour modifier le titre du document en fonction de la page :
  * `PageAccueil.vue` => `"Laure Dinateur | Graphiste"`
  * `PageContact.vue` => `"Me contacter | Laure Dinateur"`
  * `PageInformations.vue` => `"Informations | Laure Dinateur"`

### Étape 6 - Modifier le titre du document HTML via le routeur `<title>`
* Changer le titre du document à chaque changement de route en utilisant
  l'intercepteur de navigation `router.afterEach((to, from)`
  https://router.vuejs.org/fr/guide/advanced/navigation-guards.html#intercepteurs-de-navigation
* Ajouter une propriété `titre` au champ meta de route
  https://router.vuejs.org/fr/guide/advanced/meta.html#champs-meta-de-route
* Note : Effectuer le changement du titre de la page dans un `Vue.nextTick`
  https://fr.vuejs.org/v2/guide/reactivity.html#File-d%E2%80%99attente-de-mise-a-jour-asynchrone

