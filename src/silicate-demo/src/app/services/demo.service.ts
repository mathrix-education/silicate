import {Injectable} from '@angular/core';
import {Wall} from '@mathrix-education/silicate-core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable = false;
  data: Wall = [
    {
      kind: 'image',
      src: 'https://cdn.mathrix.fr/image/proteine-adn.png',
      alt: 'Du génome à la protéine Genome-fr.svg, domaine public, via Wikimédia Commons, modifié par Sandra Rivière https://upload.wikimedia.org/wikipedia/commons/3/38/Genome-fr.svg?uselang=fr',
      uuid: 'ee6afa01-af9d-42d4-bbdc-98e44c3d52ec'
    },
    {
      kind: 'block',
      variant: 'reminder',
      wall: [
        {
          kind: 'text',
          content: 'Texte...',
          uuid: 'bb4e968f-9d89-49ed-a7d8-6f47fdc4d580',
          text: 'TEST TEXT LONG LONGversion": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5version": "1.13.5'
        }
      ],
      uuid: '0f680179-d2d3-4752-8ce0-f3e99bab5638'
    },
    {
      kind: 'image',
      displayAlt: true,
      src: 'https://cdn.mathrix.fr/svt/terminale-s/Modes de spéciation',
      alt: 'Du génome à la protéine Genome-fr.svg, domaine public, via Wikimédia Commons, modifié par Sandra Rivière https://upload.wikimedia.org/wikipedia/commons/3/38/Genome-fr.svg?uselang=fr',
      uuid: 'ee6afa01-af9d-42d4-bbdc-98e44c3d52ec'
    }
  ]
}
