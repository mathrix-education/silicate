import {Injectable} from '@angular/core';
import {Wall} from '@mathrix-education/silicate-core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable = true;
  data: Wall = [
    {
      uuid: '1477050e-bd14-49ba-a8e5-131954cd3fb6',
      kind: 'image',
      src: 'https://placehold.it/300x120',
      alt: 'Texte alternatif',
      displayAlt: true
    },
    {
      uuid: 'b58513fd-9fc6-4b5e-99e6-defbe76775d9',
      kind: 'text',
      text: ''
    },
    {
      uuid: 'f682254b-1311-41c0-9721-96e5dec67f34',
      kind: 'block',
      variant: 'reminder',
      wall: [
        {
          kind: 'text',
          content: 'Texte...',
          uuid: '12ca6cf1-bad6-4d80-bbca-5a6bb125bb4b',
          text: 'llll'
        },
        {
          uuid: '8d8d1b15-d72b-4492-859e-91033a94f188',
          kind: 'text',
          text: 'pmo'
        }
      ]
    }
  ];
}
