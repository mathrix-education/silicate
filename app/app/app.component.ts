import {Component} from '@angular/core';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {EquationBrickComponent} from '@mathrix/silicate-latex';
import {VideoBrickComponent} from '../../src/silicate-videos/src/components/video-brick/video-brick.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fixture = [
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
      content: 'Ceci est un texte enrichi avec du <b>gras</b> et de l\'<i>italique</i>.'
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
    },
    {
      kind: 'text',
      content: 'Voici une expression de la fonction Zeta de Riemann, prolongée sur les complexes dont la partie réeele est inférieure à'
        + ' -1/2. C\'est aussi un excellent prétexte pour présenter l\'éditeur d\'équation !'
    },
    {
      kind: 'equation',
      content: '\\zeta(s)=\\frac{1}{\\Gamma(s)}\\int_0^{\\infty}\\frac{x^{s-1}}{e^x-1}\\mathrm{d}x'
    },
    {
      kind: 'video',
      type: 'vimeo',
      videoId: '76979871',
      summary: [
        {
          timestamp: 15,
          title: 'Ancre à 15 secondes'
        }
      ]
    },
    {
      kind: 'video',
      type: 'youtube',
      videoId: 'BsyfRX4x8RY',
      summary: [
        {
          timestamp: 34,
          title: 'Comprendre',
        },
        {
          timestamp: 89,
          title: 'Un petit jeu'
        },
        {
          timestamp: 399,
          title: 'Les limites à connaître'
        }
      ]
    },
  ];

  bricks = [
    ...SilicateCoreModule.bricks(),
    VideoBrickComponent,
    EquationBrickComponent
  ];
}
