export const SILICATE_CORE_FIXTURE = [
  {
    kind: 'title',
    content: 'Bienvenue sur l\'éditeur Silicate !'
  },
  {
    kind: 'text',
    content: `Ce site est une démonstration des fonctionnalités que propose ce nouvel éditeur. Il s'agit d'un éditeur du type WYSIWYG, `
      + `c'est à dire qu'il est possible d'éditer directement le contenu !`
  },
  {
    kind: 'text',
    content: 'Ceci est un texte simple.'
  },
  {
    kind: 'text',
    content: 'Ceci est un texte enrichi avec du <b>gras</b> et de l\'<i>italique</i>. Il y aussi un lien vers <a' +
      ' href="https://mathrix.fr" target="_blank">Mathrix.fr</a>'
  },
  {
    kind: 'list',
    items: [
      'Ceci est le premier élement d\'une liste',
      'Ceci est le deuxième élement',
      'Ceci est le troisième',
      'etc.'
    ]
  },
  {
    kind: 'text',
    content: 'Ceci est un bloc image sans valeur associée : il y a donc un bouton !'
  },
  {
    kind: 'image',
    src: null,
    alt: null
  },
  {
    kind: 'text',
    content: 'Ceci est un bloc image avec une URL définie. L\'image peut être modifié par simple clic !'
  },
  {
    kind: 'image',
    src: 'https://placehold.it/800x120',
    alt: null
  }
];
