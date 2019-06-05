import {EventEmitter, HostListener, Input, Output} from '@angular/core';
import {BaseBrick} from './base-brick';
import {TextBrick} from '../text-brick/text-brick';

export abstract class BaseBrickComponent<T extends BaseBrick = BaseBrick> {
  @Input() editable;
  @Output() brickChange = new EventEmitter<T>();
  @Output() toolbar = new EventEmitter<any>();
  @Output() enter = new EventEmitter();

  /**
   * The component toolbar, of any.
   */
  toolbarComponent = null;

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
    if (this.toolbarComponent !== null) {
      this.toolbar.emit(this.toolbarComponent);
    }
  }

  abstract serialize();
}
