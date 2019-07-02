export const CHAPTER_FIXTURE = [
  {
    kind: 'title',
    content: `Limite infinie et asymptote horizontale lorsque <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>x</mi></mrow><annotation>x</annotation></semantics></math></span><span class="katex-html"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">x</span></span></span></span> tend vers l'infini`
  },
  {
    kind: 'video',
    type: 'youtube',
    videoId: 'BsyfRX4x8RY',
    summary: []
  },
  {
    kind: 'text',
    content: 'Dans ce chapitre, nous allons aborder les <b>limites de fonctions</b>. En language simple, une' +
      ' <b>limite</b> d\'une fonction est simplement <b>la valeur</b> que cette fonction prendra avec un très grand' +
      ' nombre en argument.'
  },
  {
    kind: 'box',
    title: 'Définition',
    data: [
      {
        kind: 'text',
        content: 'Soit <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathdefault" style="margin-right: 0.10764em;">f</span><span class="mopen">(</span><span class="mord mathdefault">x</span><span class="mclose">)</span></span></span></span> une fonction quelconque.'
      },
      {
        kind: 'text',
        content: '<b>La limite de <span class="katex"><span' +
          ' class="katex-mathml"><math><semantics><mrow><mi>f</mi></mrow><annotation' +
          ' encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html"' +
          ' aria-hidden="true"><span class="base"><span class="strut" style="height: 0.88888em; vertical-align:' +
          ' -0.19444em;"></span><span class="mord mathdefault" style="margin-right:' +
          ' 0.10764em;">f</span></span></span></span> à l\'infini</b> ou <b>limite infinie</b> de <span class="katex">' +
          '<span class="katex-mathml"><math><semantics><mrow><mi>f</mi></mrow>' +
          '<annotation encoding="application/x-tex">f</annotation></semantics></math></span>' +
          '<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.88888em;' +
          'vertical-align: -0.19444em;"></span><span class="mord mathdefault" style="margin-right: 0.10764em;">f' +
          '</span></span></span></span> est la valeur de <span class="katex"><span class="katex-mathml"><math>' +
          '<semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow>' +
          '<annotation encoding="application/x-tex">f(x)</annotation></semantics></math></span>' +
          '<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em;' +
          'vertical-align: -0.25em;"></span><span class="mord mathdefault" style="margin-right: 0.10764em;">f</span>' +
          '<span class="mopen">(</span><span class="mord mathdefault">x</span><span class="mclose">)</span></span>' +
          '</span></span> pour un très grand <span class="katex"><span class="katex-mathml"><math><semantics><mrow>' +
          '<mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span>' +
          '<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:' +
          '0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">x</span></span></span></span>. On la' +
          ' note'
      },
      {
        kind: 'equation',
        content: '\\lim\\limits_{x \\to \\infty} f(x)'
      }
    ]
  },
  {
    kind: 'text',
    content: 'Qu\'est ce que ca veut dire ?...'
  },
  {
    kind: 'text',
    content: 'Faisons un exemple introductif :'
  },
  {
    kind: 'list',
    items: [
      'Soit <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo separator="true">,</mo><mi>x</mi><mo>∈</mo><mo>[</mo><mn>1</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo>[</mo></mrow><annotation encoding="application/x-tex">f(x)= 1+\\dfrac{1}{x}, x \\in [1,\\infty[</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathdefault">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.72777em;vertical-align:-0.08333em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:2.00744em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.32144em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathdefault">x</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">&#8203;</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord mathdefault">x</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord">∞</span><span class="mopen">[</span></span></span></span>'
    ]
  }
];

