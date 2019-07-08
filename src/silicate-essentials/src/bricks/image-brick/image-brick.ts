import {BaseBrick} from '@mathrix/silicate-core';


export interface ImageBrick extends BaseBrick {
  kind: 'image';
  src: string;
  alt: string;
  displayAlt: boolean;
}
