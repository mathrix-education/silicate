import {BaseBrick, Wall} from '@mathrix/silicate-core';


export interface BoxBrick extends BaseBrick {
  kind: 'box';
  title: string;
  data: Wall;
}
