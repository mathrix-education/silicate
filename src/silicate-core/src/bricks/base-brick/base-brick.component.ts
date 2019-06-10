import {EventEmitter, Output} from '@angular/core';
import {BaseBrick} from './base-brick';
import {BrickDeclaration} from './brick-declaration';

export abstract class BaseBrickComponent<T extends BaseBrick = BaseBrick> {
  static declaration: BrickDeclaration = {} as BrickDeclaration;

  /** Called when the brick data change */
  @Output() brickChange = new EventEmitter<T>();
  @Output() toolbar = new EventEmitter<any>();
  @Output() enter = new EventEmitter();
  model: any | T = {};
  protected dirty = false;
  protected original: any | T = null;

  get hydrated() {
    return this.original !== null;
  }

  static empty() {
    return {};
  }

  assign(data: T) {
    if (!this.hydrated) {
      this.original = data;
      this.model = data;
    } else if (JSON.stringify(this.model) !== JSON.stringify(data)) {
      this.model = data;
      this.dirty = true;
    }
  }
}
