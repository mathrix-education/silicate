import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {TableBrick} from './table-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class TableBrickFactory extends BaseBrickFactory<TableBrick> {
  make(): TableBrick {
    return this.withUuid({
      kind: 'table',
      matrix: [
        [
          this.withUuid({
            kind: 'text',
            text: 'Texte 1'
          }),
          this.withUuid({
            kind: 'text',
            text: 'Texte 2'
          })
        ],
        [
          this.withUuid({
            kind: 'text',
            text: 'Texte 3'
          }),
          this.withUuid({
            kind: 'text',
            text: 'Texte 4'
          })
        ]
      ]
    });
  }
}
