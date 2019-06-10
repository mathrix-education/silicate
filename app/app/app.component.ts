import {Component} from '@angular/core';
import {SilicateCoreModule} from '../../src/silicate-core/src/silicate-core.module';
import {EquationBrickComponent} from '../../src/silicate-latex/src/components/equation-brick/equation-brick.component';
import {VideoBrickComponent} from '../../src/silicate-videos/src/components/video-brick/video-brick.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fixture = [
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
    {
      kind: 'text',
      style: 'secondary-title',
      content: 'Bienvenue sur l\'éditeur Silicate !'
    },
    {
      kind: 'text',
      style: 'normal',
      content: 'Ceci est un texte simple.'
    },
    {
      kind: 'text',
      style: 'normal',
      content: 'Ceci est un texte enrichi avec du <b>gras</b> et de l\'<i>italique</i>.'
    },
    {
      kind: 'text',
      style: 'normal',
      content: 'Ceci est un bloc image sans valeur associée : il y a donc un bouton !'
    },
    {
      kind: 'image',
      src: null,
      alt: null
    },
    {
      kind: 'text',
      style: 'normal',
      content: 'Ceci est un bloc image avec une URL définie. L\'image peut être modifié par simple clic !'
    },
    {
      kind: 'image',
      src: 'https://placehold.it/800x120',
      alt: null
    },
    {
      kind: 'equation',
      content: '\\zeta(s)=\\frac{1}{\\Gamma(s)}\\int_0^{\\infty}\\frac{x^{s-1}}{e^x-1}\\mathrm{d}x'
    }
  ];
  bricks = [
    ...SilicateCoreModule.bricks(),
    VideoBrickComponent,
    EquationBrickComponent
  ];
}
