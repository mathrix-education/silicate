import {BaseBrick, Wall} from '@mathrix-education/silicate-core';

export declare type ColumnType = 2 | 3;

export interface ColumnsBrick extends BaseBrick {
  kind: 'columns';
  columns: ColumnType;
  content: Wall;
}