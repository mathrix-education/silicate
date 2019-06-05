import {EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {BaseBrick} from './base-brick';
import {BrickDeclaration} from './brick-declaration';

export abstract class BaseBrickComponent<T extends BaseBrick = BaseBrick> {
  static declaration: BrickDeclaration;

  @Input() editable;

  @Output() brickChange = new EventEmitter<T>();
  @Output() toolbar = new EventEmitter<any>();
  @Output() enter = new EventEmitter();

  static empty() {
    return {};
  }

  assign(data: T) {
    if (data !== null && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        this[key] = data[key];
      });
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

  abstract serialize();
}
