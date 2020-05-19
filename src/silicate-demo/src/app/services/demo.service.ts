import {Injectable} from '@angular/core';
import {Wall} from '@mathrix-education/silicate-core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable = false;
  data: Wall = [{
    uuid: '1477050e-bd14-49ba-a8e5-131954cd3fb6',
    kind: 'image',
    src: 'https://placehold.it/300x120',
    alt: 'Texte alternatif',
    displayAlt: true
  }];
}
