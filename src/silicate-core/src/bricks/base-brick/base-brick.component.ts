import {EventEmitter, Output} from '@angular/core';
import {BaseBrick} from './base-brick';

export abstract class BaseBrickComponent<T extends BaseBrick = BaseBrick> {
  static readonly kind: string = 'none';
  static readonly icon: string = 'settings';
  static readonly displayName: string = 'none';

  @Output() brickChange = new EventEmitter<T>();

  modelValue: any | T = {};
  protected dirty = false;
  protected original: any | T = null;


  static empty() {
    return {};
  }

  get model(): T {
    return this.modelValue;
  }

  set model(newModel) {
    this.modelValue = newModel;
    this.brickChange.emit(this.model);
  }

  get hydrated() {
    return this.original !== null;
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
