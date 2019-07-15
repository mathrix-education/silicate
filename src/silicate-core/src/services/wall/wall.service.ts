import {ComponentRef, EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {Wall} from '../../interfaces/wall';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {first} from 'rxjs/operators';


@Injectable()
export class WallService {
  /** The brick components references */
  private brickReferences: ComponentRef<BaseBrickComponent>[] = [];
  /** Fired when the bricks references are updated */
  brickReferences$ = new EventEmitter<number>();
  /** The wall, which contains the bricks data. */
  wall$ = new BehaviorSubject<Wall>([]);


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
  get(index: number) {
    return this.wall[index];
  }


  /**
   * Get the index of a given brick, based on a uuid research.
   * @param brick the brick to find
   */
  indexOf(brick: BaseBrick): number {
    return this.wall.findIndex(b => b.uuid === brick.uuid);
  }


  /**
   * Insert a brick at a given index.
   * @param index The brick index.
   * @param brick The brick data.
   */
  insert(index: number, brick: BaseBrick) {
    const wall = this.wall;
    wall.splice(index, 0, brick);
    this.wall$.next(wall);
    return this;
  }

  /**
   * Insert a brick at the given index and foc us it.
   * @param index The brick index.
   * @param brick The brick data.
   */
  insertAndFocus(index: number, brick: any) {
    this.brickReferences$
      .pipe(first(i => i === index))
      .subscribe(() => {
        this.getBrickReference(index).instance.focus();
      });

    return this.insert(index, brick);
  }


  /**
   * Edit a brick at a given index.import {Wall} from '../../silicate-core.types';
   * @param index The brick index.
   * @param brick The brick data.
   */
  patch(index: number, brick: BaseBrick) {
    const wall = this.wall;
    wall[index] = brick;
    this.wall$.next(wall);
    return this;
  }


  /**
   * Delete a brick at a given index.
   * @param index The brick index.
   */
  delete(index: number) {
    const wall = this.wall;
    wall.splice(index, 1);
    this.wall$.next(wall);
    return this;
  }

  /**
   * Get the brick reference at a specific index
   * @param index The index [0...n]
   */
  getBrickReference(index: number): ComponentRef<BaseBrickComponent> {
    return this.brickReferences[index];
  }

  /**
   * Set a brick reference at a specific index
   * @param index The index [0...n]
   * @param brickReference The brick reference itself
   */
  setBrickReference(index: number, brickReference: ComponentRef<BaseBrickComponent>): void {
    this.brickReferences[index] = brickReference;
    this.brickReferences$.emit(index);
  }
}
