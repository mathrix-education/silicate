import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix-education/silicate-core';
import {ColumnsBrick} from './columns-brick';

@Injectable({
  providedIn: SilicateCoreModule
})
export class ColumnsBrickFactory extends BaseBrickFactory<ColumnsBrick> {
  make(): ColumnsBrick {
    return this.withUuid({
        kind: 'columns',
        columns: 2,
        content: [
          {
            kind: 'image',
            src: 'https://placehold.it/150x120',
            alt: 'Légende',
            displayAlt: true,
          },
          {
            kind: 'image',
            src: 'https://placehold.it/150x120',
            alt: 'Légende',
            displayAlt: true,
          }
        ]
      }
    );
  }
}