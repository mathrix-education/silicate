export const FIXTURE = [
  {
    kind: 'title',
    heading: 'h2',
    text: 'Ceci est un titre 1'
  },
  {
    kind: 'title',
    heading: 'h3',
    text: 'Ceci est un titre 2'
  },
  {
    kind: 'video',
    type: 'youtube',
    videoId: '9rkhji8eX3c',
    summary: [
      {
        timestamp: 30,
        title: 'Le bac de Filipi'
      },
      {
        timestamp: 236,
        title: 'Présentation des formations'
      }
    ]
  },
  {
    kind: 'pdf-viewer',
    url: 'https://cdn.mathrix.fr/./s-sciences-ingenieur-2018-metropole-sujet-officiel.pdf'
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
          '$(DE)$ soit parallèle à la droite $(BC)$. On a alors :'
      },
      {
        kind: 'equation',
        equation: '\\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{DE}{BC}'
      }
    ]
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
            text: 'Texte A'
          }
        ],
        [
          {
            kind: 'text',
            text: 'Texte B'
          }
        ]
      ],
      [
        [
          {
            kind: 'text',
            text: 'Texte C'
          }
        ],
        [
          {
            kind: 'text',
            text: 'Texte D'
          }
        ]
      ]
    ]
  }
];
