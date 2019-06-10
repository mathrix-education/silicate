import {BaseBrick} from '../base-brick/base-brick';

export interface TitleBrick extends BaseBrick {
  kind: 'title';
  content: string;
}
