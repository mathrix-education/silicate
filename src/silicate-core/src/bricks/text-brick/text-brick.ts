import {BaseBrick} from '../base-brick/base-brick';

export interface TextBrick extends BaseBrick {
  kind: 'text';
  content: string;
}
