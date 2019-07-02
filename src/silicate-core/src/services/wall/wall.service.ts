import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {Wall} from '../../interfaces/wall';


@Injectable()
export class WallService {
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


  append(brick: BaseBrick) {
    const wall = this.wall;
    wall.push(brick);
    this.wall$.next(wall);
    return this;
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
}
