import {BaseBrick} from '@mathrix-education/silicate-core';


export interface ImageBrick extends BaseBrick {
  kind: 'image';
  src: string;
  alt: string;
  displayAlt: boolean;
}
