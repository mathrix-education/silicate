import {Brick, Bricks, TypedValueProvider} from '@mathrix-education/silicate-core';
import {ColumnsBrickComponent} from './columns-brick.component';
import {ColumnsBrickFactory} from './columns-brick.factory';

export const ColumnsBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'columns',
    icon: 'view_column',
    name: 'Colonnes',
    component: ColumnsBrickComponent,
    factory: ColumnsBrickFactory
  }
};