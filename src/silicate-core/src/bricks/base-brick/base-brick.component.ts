import {DoCheck, EventEmitter, Input, Output} from '@angular/core';
import {BaseBrick} from './base-brick';


/**
 * The base class for brick component.
 */
export abstract class BaseBrickComponent<T extends BaseBrick = BaseBrick> implements DoCheck {
  @Input() editable = false;

  /** [data] in binding */
  @Input() data: T;
  /** (data) out binding */
  @Output() dataChanged = new EventEmitter<T>();

  /** The previously checked data, JSON stringified. */
  private dataJSON: string = null;


  /**
   * We will only emit the change if the data objects are structurally different.
   * This is not the best way to do so, but it should work perfectly.
   */
  ngDoCheck() {
    const dataJSONChallenge = JSON.stringify(this.data);

    if (dataJSONChallenge !== null && this.dataJSON !== dataJSONChallenge) {
      this.dataChanged.emit(this.data);
    }

    this.dataJSON = dataJSONChallenge;
  }
}
