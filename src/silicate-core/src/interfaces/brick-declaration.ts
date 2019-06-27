import {Type} from '@angular/core';
import {BaseBrick} from '../bricks/base-brick/base-brick';
import {BaseBrickComponent} from '../bricks/base-brick/base-brick.component';
import {BaseBrickFactory} from '../bricks/base-brick/base-brick.factory';


export interface BrickDeclaration<T extends BaseBrick = BaseBrick> {
  kind: string;
  icon: string;
  name: string;
  component: Type<BaseBrickComponent<T>>;
  factory: Type<BaseBrickFactory<T>>;
}
