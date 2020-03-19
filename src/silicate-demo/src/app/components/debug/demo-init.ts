export const demoInit = [{
  kind: 'question',
  children: [
    {
      kind: 'question',
      statement: [
        {
          kind: 'text',
          text: 'Déterminer  l’ensemble de définition de la fonction $h.$',
        }
      ],
      explanations: [
        {
          points: 1,
          content: [
            {
              kind: 'text',
              text: 'Pour déterminer  l’ensemble de définition de la fonction posons',
            },
            {
              kind: 'equation',
              equation: 'x-2 \\neq0.',
              description: null
            },
            {
              kind: 'text',
              text: 'On a :',
            },
            {
              kind: 'equation',
              equation: '\\begin{aligned}\nx-2 \\neq0\\\\\nx \\neq2.\\\\\n\\end{aligned}',
              description: null
            },
            {
              kind: 'text',
              text: 'L’ensemble de définition de la fonction est',
            },
            {
              kind: 'equation',
              equation: '\\mathbb{R}\\ \\backslash \\{ 2\\}.',
              description: null
            }
          ]
        }
      ],
      state: {correction: true}
    },
    {
      kind: 'question',
      statement: [
        {
          kind: 'text',
          text: 'Calculer les images de $-5$ et $\\frac23.$',
        }
      ],
      explanations: [
        {
          points: 1,
          content: [
            {
              kind: 'text',
              text: 'Calculons $h(-5)$',
            },
            {
              kind: 'equation',
              equation: '\\begin{aligned}\nh(-5)&=\\frac{5(-5)-5}{-5-2}\\\\\n&=\\frac{-30}{-7}\\\\\nh(-5)&=\\frac{30}{7}.\\\\\n\\end{aligned}',
              description: null
            },
            {
              kind: 'text',
              text: 'Calculons $h\\left(\\frac23\\right):$',
            },
            {
              kind: 'equation',
              equation: '\\begin{aligned}\nh\\left(\\frac23\\right)&=\\frac{5\\left(\\frac23\\right )-5}{\\left (\\frac23\\right) -2}\\\\\n\\\\\n&=\\frac{\\frac{10-15}{3}}{\\frac{-4}{3}}\\\\\n\\\\\n&=\\frac{\\frac{-5}{3}}{\\frac{-4}{3}}\\\\\n\\\\\n&=\\frac{-5}{3} \\times \\frac{-3}{4}\\\\\nh\\left(\\frac23\\right)&=\\frac54.\n\\end{aligned}',
              description: null
            }
          ]
        }
      ],
      state: {correction: true}
    },
    {
      kind: 'question',
      statement: [
        {
          kind: 'text',
          text: 'Déterminer les antécédents de $-2$ et $4.$',
        }
      ],
      explanations: [
        {
          points: 1,
          content: [
            {
              kind: 'text',
              text: 'Déterminons l’antécédent de $-2$ Soit :',
            },
            {
              kind: 'equation',
              equation: 'h(x)=-2.',
              description: null
            },
            {
              kind: 'text',
              text: 'On a :',
            },
            {
              kind: 'equation',
              equation: '\\begin{aligned}\n\\frac{5x-5}{x-2}&=-2\\\\\n5x-5&=-2x+4\\\\\n5x+\\color{red}{2x}&=4+\\color{red}{5}\\\\\n7x&=9\\\\\nx&=\\frac97.\n\\end{aligned}',
              description: null
            }
          ]
        },
        {
          points: 1,
          content: [
            {
              kind: 'text',
              text: 'Déterminons l’antécédent de $4$ Soit :',
            },
            {
              kind: 'equation',
              equation: 'h(x)=4.',
              description: null
            },
            {
              kind: 'text',
              text: 'On a',
            },
            {
              kind: 'equation',
              equation: '\\begin{aligned}\n\\frac{5x-5}{x-2}&=4\\\\\n5x-5&=4(x-2)\\\\\n5x-5&=4x-8\\\\\n5x\\color{red}{-4x }&=-8\\color{red}{+5}\\\\\nx&=-3.\n\\end{aligned}',
              description: null
            }
          ]
        }
      ],
      state: {correction: true}
    }
  ],
  statement: [
    {
      kind: 'text',
      text: 'On considère la fonction $h(x)$ définie par',
    },
    {
      kind: 'equation',
      equation: 'h(x)=\\frac{5x-5}{x-2}.',
      description: null
    }
  ],
  explanations: [],
  state: {correction: true}
}];
