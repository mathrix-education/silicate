import {DoCheck, EventEmitter, Input, Output} from '@angular/core';
import {BaseBrick} from '../../declarations/bricks-factories/base-brick';


export abstract class BaseBrickComponent<T extends BaseBrick = BaseBrick> implements DoCheck {
  @Input() editable = false;
  @Input() data: T;
  @Output() dataChanged = new EventEmitter<T>();

  /** The previously checked data, JSON stringified. */
  private dataJSON: string = null;


  ngDoCheck() {
    const dataJSONChallenge = JSON.stringify(this.data);

    if (dataJSONChallenge !== null && this.dataJSON !== dataJSONChallenge) {
      this.dataChanged.emit(this.data);
    }

    this.dataJSON = dataJSONChallenge;
  }
}
