import {BaseBrick} from '../bricks/base-brick/base-brick';


export interface Brick<T extends BaseBrick = BaseBrick> {
  kind: string;
  icon: string;
  name: string;
  component: any;
  factory: any;
}
