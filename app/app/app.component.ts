import {Component} from '@angular/core';
import {TextBrick} from '../../src/silicate-core/src/bricks/text-brick/text-brick';
import {ImageBrick} from '../../src/silicate-core/src/bricks/image-brick/image-brick';
import {VideoBrick} from '../../src/silicate-core/src/bricks/video-brick/video-brick';

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
      summary: []
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
    } as VideoBrick,
    {
      kind: 'text',
      style: 'secondary-title',
      content: 'Bienvenue sur l\'éditeur Silicate !'
    } as TextBrick,
    {
      kind: 'text',
      style: 'normal',
      content: 'Ceci est un text simple.'
    } as TextBrick,
    {
      kind: 'text',
      style: 'normal',
      content: 'Ceci est un texte enrichi avec du <strong>gras</strong> et de l\'<em>italique</em>.'
    } as TextBrick,
    {
      kind: 'text',
      style: 'normal',
      content: 'Ceci est un bloc image sans valeur associée : il y a donc un bouton !'
    } as TextBrick,
    {
      kind: 'image',
      src: null,
      alt: null
    } as ImageBrick,
    {
      kind: 'text',
      style: 'normal',
      content: 'Ceci est un bloc image avec une URL définie. L\'image peut être modifié par simple clic !'
    } as TextBrick,
    {
      kind: 'image',
      src: 'https://placehold.it/800x120',
      alt: null
    } as ImageBrick,
  ];
}
