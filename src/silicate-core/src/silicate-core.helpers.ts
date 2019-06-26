import {InjectionToken, Provider, Type} from '@angular/core';
import {BaseBrick, BaseBrickFactory} from './declarations/bricks-factories/base-brick';
import {BaseBrickComponent} from './bricks/base-brick/base-brick.component';
import {BrickDeclaration} from './silicate-core.types';


const BricksToken = new InjectionToken<BrickDeclaration[]>('Bricks');

export function brick<T extends BaseBrick = BaseBrick>(
  kind: string,
  component: Type<BaseBrickComponent<T>>,
  factory: Type<BaseBrickFactory<T>>,
  name: string,
  icon: string
): Provider {
  return {
    provide: BricksToken,
    multi: true,
    useValue: {
      kind,
      component,
      factory,
      name,
      icon
    }
  };
}
