import {Type} from '@angular/core';
import {BaseBrickComponent} from './bricks/base-brick/base-brick.component';
import {BaseBrick, BaseBrickFactory} from './declarations/bricks-factories/base-brick';

export type Wall = any[];


export interface EditableFilter {
  selector: string;
  allowedAttributes: string[];
}

export interface BrickDeclaration<T extends BaseBrick = BaseBrick> {
  kind: string;
  icon: string;
  name: string;
  component: Type<BaseBrickComponent<T>>;
  factory: Type<BaseBrickFactory<T>>;
}
