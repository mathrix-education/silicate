import {Injectable, Type} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {BrickDeclaration, BrickMappings, Wall} from '../../silicate-core.types';

@Injectable()
export class SilicateService {
  /** If the edition should be permitted */
  editable = false;
  /** The Bricks mappings */
  mappings: BrickMappings = {};
  /** The wall, which contains the bricks data. */
  wall$ = new BehaviorSubject<Wall>([]);

  /**
   * Generate bricks mappings using the given brick static declarations.
   * @param bricks Array of the used BrickComponents
   */
  generateMappings(bricks: any[]) {
    bricks.forEach(brickComponent => {
      this.mappings[brickComponent.kind] = {
        icon: brickComponent.icon,
        displayName: brickComponent.displayName,
        component: brickComponent
      };
    });
  }

  /**
   * Get the brick declaration matching with the given kind.
   * @param kind The Brick kind.
   */
  resolve(kind: string): BrickDeclaration {
    if (!this.mappings.hasOwnProperty(kind)) {
      throw new Error(`${kind} is not a valid brick kind.`);
    }

    return this.mappings[kind];
  }

  /**
   * Get a copy of the wall$ BehaviorSubject. Since the structure of a brick is relatively free, we cannot make any assumption of its
   * structure and the JSON intermediate is fine.
   * @link https://medium.com/@gamshan001/javascript-deep-copy-for-array-and-object-97e3d4bc401a
   */
  get wall(): Wall {
    return JSON.parse(JSON.stringify(this.wall$.value));
  }

  /**
   * Get the brick at a given index.
   * @param index The brick index.
   */
  get<T = any>(index: number): T {
    return this.wall[index];
  }

  /**
   * Insert a brick at a given index.
   * @param index The brick index.
   * @param brick The brick data.
   */
  insert(index: number, brick: BaseBrick) {
    this.wall$.next(
      this.wall.splice(index, 0, brick)
    );
    return this;
  }

  /**
   * Edit a brick at a given index.
   * @param index The brick index.
   * @param brick The brick data.
   */
  patch(index: number, brick: BaseBrick) {
    this.wall$.next(
      this.wall.splice(index, 1, brick)
    );
    return this;
  }


  /**
   * Delete a brick at a given index.
   * @param index The brick index.
   */
  delete(index: number) {
    this.wall$.next(
      this.wall.splice(index)
    );
    return this;
  }
}
