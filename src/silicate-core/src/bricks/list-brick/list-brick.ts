import {BaseBrick} from '../base-brick/base-brick';

export interface ListBrick extends BaseBrick {
  kind: 'list';
  items: string[];
}
