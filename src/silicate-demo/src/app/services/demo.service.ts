import {Injectable} from '@angular/core';
import {Wall} from '@mathrix-education/silicate-core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable = true;
  data: Wall =[
    {
      kind: 'text',
      text: 'test texr',
      uuid: 'ee6afa01-af9d-42d4-bbdc-98e44c3d52ec'
    },
    {
      kind: 'block',
      variant: 'reminder',
      wall: [
        {
          kind: 'text',
          text: 'Texte...',
          uuid: '67782f7a-edeb-41ac-b2a2-aae39aa502a1'
        }
      ],
      uuid: 'a321e818-f070-46ba-bd17-f574b2d3b9cb'
    },
    {
      kind: 'pdf-viewer',
      url: 'http://www.orimi.com/pdf-test.pdf',
      uuid: '957bcf33-0a13-47ec-a38d-754f6f0781b5'
    },
    {
      kind: 'text',
      text: '',
      uuid: 'd063075f-6539-4040-9e88-dc9f2082176c'
    },
    {
      kind: 'title',
      heading: 'h2',
      text: 'Titre à définir...',
      uuid: '11866045-1055-4e54-a6ce-f85d5491d94d'
    },
    {
      kind: 'table',
      matrix: [
        [
          [
            {
              kind: 'text',
              text: 'Texte 1',
              uuid: '32cbe6aa-40a3-4881-9472-450084367369'
            }
          ],
          [
            {
              kind: 'text',
              text: 'Texte 2',
              uuid: 'f4b57bdd-dd54-4dbd-a501-587ef4cc2602'
            }
          ]
        ],
        [
          [
            {
              kind: 'text',
              text: 'Texte 1',
              uuid: '8b116d1f-11b3-4ff7-8844-ae2455e5a09e'
            }
          ],
          [
            {
              kind: 'text',
              text: 'Texte 2',
              uuid: 'bd2d7d60-ea43-419b-8733-de01874ac250'
            }
          ]
        ]
      ],
      uuid: '9c0147fb-607b-4ffc-90b4-da19aded6e3d'
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
      ],
      uuid: 'a276b2cd-fc15-472a-b24d-50f19af691ca'
    },
    {
      kind: 'container',
      variant: 'theorem',
      prefix: '',
      suffix: '',
      wall: [
        {
          kind: 'text',
          content: 'Texte...',
          uuid: '1454ae23-2078-4c2a-a6fb-c896fa2d4672',
          text: 'gggg'
        }
      ],
      uuid: 'e0c5812f-2745-491d-b9bb-2f55716ebf41'
    },
    {
      kind: 'columns',
      columns: 2,
      content: [
        {
          kind: 'image',
          src: 'https://placehold.it/150x120',
          alt: 'Légende',
          displayAlt: true,
          uuid: '4dc24bbe-9e37-429b-93fe-89ab5441ad8b'
        },
        {
          kind: 'image',
          src: 'https://placehold.it/150x120',
          alt: 'Légende',
          displayAlt: true,
          uuid: '20f13e06-6c8f-4910-889a-0331a85912b5'
        }
      ],
      uuid: 'beddeaaa-1362-4ad4-a098-528da493e567'
    },
    {
      kind: 'image',
      src: 'https://placehold.it/300x120',
      alt: 'Texte alternatif',
      displayAlt: true,
      uuid: 'ecaea799-067a-4746-9576-f9106152f5a9'
    },
    {
      kind: 'list',
      type: 'ul',
      items: [
        'Un premier item...',
        '$a+265$ '
      ],
      uuid: '0151a0ce-a66f-4d3b-9499-2756d6e76fdf'
    }
  ]
}
