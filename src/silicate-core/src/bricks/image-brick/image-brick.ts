import {BaseBrick} from '../base-brick/base-brick';

export interface ImageBrick extends BaseBrick {
  kind: 'image';
  src: string;
  alt: string;
}
