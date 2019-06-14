import {DoCheck, EventEmitter, Input, KeyValueDiffer, KeyValueDiffers, Output} from '@angular/core';
import {BaseBrick} from './base-brick';

export abstract class BaseBrickComponent<T extends BaseBrick = BaseBrick> implements DoCheck {
  /**
   * BaseBrickComponent declaration.
   * In this case, it is pretty irrelevant but allow surcharging the declaration.
   */
  static readonly kind: string = 'none';
  static readonly icon: string = 'settings';
  static readonly displayName: string = 'none';

  @Input() editable = false;
  @Input() data: T;
  @Output() dataChanged = new EventEmitter<T>();

  protected differ: KeyValueDiffer<keyof T, any>;

  constructor(protected differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.data);

    if (changes) {
      let shouldEmit = false;

      changes.forEachChangedItem((change) => {
        shouldEmit = shouldEmit || JSON.stringify(change.currentValue) !== JSON.stringify(change.previousValue);
      });

      if (shouldEmit) {
        this.dataChanged.emit(this.data);
      }
    }
  }
}
