export const EDUCATION_FIXTURE = [
  {
    kind: 'pdf-viewer',
    url: 'https://cdn.mathrix.fr/./s-sciences-ingenieur-2018-metropole-sujet-officiel.pdf',
    uuid: 'f21e7ce8-a5e7-4cfa-b8ad-a925be75644c'
  },
  {
    kind: 'container',
    variant: 'theorem',
    prefix: '',
    suffix: 'de Thalès',
    wall: [
      {
        kind: 'text',
        text: 'Soit un triangle $ABC$, et deux points $D$ et $E$ des droites $(AB)$ et $(AC)$ de sorte que la droite' +
          '$(DE)$ soit parallèle à la droite $(BC)$. On a alors :',
        uuid: '5e0b9e88-3272-4f1c-968d-2a2d484350a3'
      },
      {
        kind: 'equation',
        equation: '\\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{DE}{BC}',
        uuid: '5e0b9e88-3272-4f1c-968d-2a4d484350a3'
      }
    ],
    uuid: 'f21e7ce8-a5e7-4cfa-b8ad-a564925be74c'
  },
  {
    kind: 'block',
    variant: 'reminder',
    wall: [
      {
        kind: 'text',
        text: 'Hello world'
      }
    ]
  },
  {
    kind: 'equation',
    equation: 'H(f)={\\begin{bmatrix}{\\frac {\\partial ^{2}f}{\\partial x_{1}^{2}}}&{\\frac {\\partial ^{2}f}{\\partial x_{1}\\partial x_{2}}}&\\cdots &{\\frac {\\partial ^{2}f}{\\partial x_{1}\\partial x_{n}}}\\\\{\\frac {\\partial ^{2}f}{\\partial x_{2}\\partial x_{1}}}&{\\frac {\\partial ^{2}f}{\\partial x_{2}^{2}}}&\\cdots &{\\frac {\\partial ^{2}f}{\\partial x_{2}\\partial x_{n}}}\\\\\\vdots &\\vdots &\\ddots &\\vdots \\\\{\\frac {\\partial ^{2}f}{\\partial x_{n}\\partial x_{1}}}&{\\frac {\\partial ^{2}f}{\\partial x_{n}\\partial x_{2}}}&\\cdots &{\\frac {\\partial ^{2}f}{\\partial x_{n}^{2}}}\\end{bmatrix}}',
    description: 'Matrice Hessienne'
  },
  {
    kind: 'table',
    matrix: [
      [
        [
          {
            kind: 'text',
            text: 'Texte A',
            uuid: '4655fd93-e8b8-4690-993e-4c23ef016e9a'
          }
        ],
        [
          {
            kind: 'text',
            text: 'Texte B',
            uuid: '667ee843-8ee8-4f7f-a822-590ff2cf35a8'
          }
        ]
      ],
      [
        [
          {
            kind: 'text',
            text: 'Texte C',
            uuid: 'ea540fd4-5241-4c51-9f1c-e8939c3c7991'
          }
        ],
        [
          {
            kind: 'text',
            text: 'Texte D',
            uuid: '4b33ee1f-a7bb-4483-a0e3-7a8962ae1a00'
          }
        ]
      ]
    ],
    uuid: '7efb26ef-8496-408f-8104-18138e53d8ae'
  },
  {
    kind: 'title',
    text: 'Titre',
    uuid: '5f4c0cbf-6d76-4b6f-adfe-2d6a5859e111'
  },
  {
    kind: 'subtitle',
    text: 'Sous-titre',
    uuid: '79d1ad73-b634-41ab-a499-4759f9df596c'
  }
];
