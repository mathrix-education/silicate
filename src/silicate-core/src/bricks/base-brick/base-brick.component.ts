import {EventEmitter, HostListener, Input, Output} from '@angular/core';
import {BaseBrick} from './base-brick';
import {BrickDeclaration} from './brick-declaration';

export abstract class BaseBrickComponent<T extends BaseBrick = BaseBrick> {
  static declaration: BrickDeclaration;

  @Input() editable;

  /** Called when the brick data change */
  @Output() brickChange = new EventEmitter<T>();
  @Output() toolbar = new EventEmitter<any>();
  @Output() enter = new EventEmitter();

  protected dirty = false;
  protected original: any | T = null;
  model: any | T = {};

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

  @HostListener('keydown', ['$event'])
  onKeyDown($event: KeyboardEvent) {
    if ($event.key === 'Enter') {
      this.enter.emit($event);
    }
  }

  @HostListener('click')
  @HostListener('focus')
  onFocus() {
    /**
     * Trick to get the current statically-defined toolbar
     * @link https://stackoverflow.com/a/36643177/3728261
     */
    const constructor: any = this.constructor;

    if (constructor.declaration.toolbar !== null) {
      this.toolbar.emit(constructor.declaration.toolbar);
    }
  }
}
