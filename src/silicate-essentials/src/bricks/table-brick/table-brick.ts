import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface TableBrick extends BaseBrick {
  kind: 'table';
  matrix: Wall[][]; // First dimension is the rows, second is the columns
}
