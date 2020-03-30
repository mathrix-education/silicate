import {ComponentRef, EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BaseBrick} from '../../bricks/base-brick/base-brick';
import {Wall} from '../../interfaces/wall';
import {BaseBrickComponent} from '../../bricks/base-brick/base-brick.component';
import {first} from 'rxjs/operators';


@Injectable()
export class WallService {
  /** A counter to generate unique bricks ids */
  private counterId = 0;
  /** The brick components references */
  private brickReferences: ComponentRef<BaseBrickComponent>[] = [];
  /** Fired when the bricks references are updated */
  private brickReferences$ = new EventEmitter<number>();
  /** The wall, which contains the bricks data. */
  private wallSubject = new BehaviorSubject<Wall>([]);
  /** The wall as observable */
  wall$ = this.wallSubject.asObservable();


  /**
   * Get a copy of the wall$ BehaviorSubject. Since the structure of a brick is relatively free, we cannot make any assumption of its
   * structure and the JSON intermediate is fine.
   * @link https://medium.com/@gamshan001/javascript-deep-copy-for-array-and-object-97e3d4bc401a
   */
  get wall(): Wall {
    return this.deepCopy(this.wallSubject.value);
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
    this.create(wall);
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
   * Push a new wall instance
   */
  create(wall: Wall) {
    // if walls are different, push a deep copy of wall
    if (JSON.stringify(this.wall) !== JSON.stringify(wall)) {
      this.wallSubject.next(this.deepCopy(wall));
    }
  }


  /**
   * Edit a brick at a given index.import {Wall} from '../../silicate-core.types';
   * @param index The brick index.
   * @param brick The brick data.
   */
  patch(index: number, brick: BaseBrick) {
    const wall = this.wall;
    wall[index] = brick;
    this.create(wall);
    return this;
  }


  /**
   * Delete a brick at a given index.
   * @param index The brick index.
   */
  delete(index: number) {
    const wall = this.wall;
    wall.splice(index, 1);
    this.create(wall);
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

  /**
   * Create a deep copy of wall object
   */
  private deepCopy(wall: Wall): Wall {
    return JSON.parse(JSON.stringify(wall));
  }
}
