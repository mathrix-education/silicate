import {BaseBrick} from '../base-brick/base-brick';

export interface VideoBrick extends BaseBrick {
  kind: 'video';
  src: string;
}
