import {Injectable, Type} from '@angular/core';
import {BaseBrickFactory} from '../../declarations/bricks-factories/base-brick';


@Injectable()
export class ContainerService {
  brickFactories: any[] = [];
  editableEvents: any[] = [];
  editableFilters: any[] = [];
  toolbarActions: any[] = [];


  /**
   * Get the brick declaration matching with the given kind.
   * @param kind The Brick kind.
   */
  resolve(kind: string) {
    const factory = this.brickFactories.find((f) => f.kind === kind);

    if (!factory) {
      throw new Error(`${kind} is not a valid brick kind.`);
    }

    return factory;
  }
}
