import {BaseBrick, Wall} from '@mathrix/silicate-core';

export interface RemarkBrick extends BaseBrick {
  kind: 'remark';
  wall: Wall;
}
