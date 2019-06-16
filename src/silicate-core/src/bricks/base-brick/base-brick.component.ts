import {DoCheck, EventEmitter, Input, Output} from '@angular/core';
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

  /** The previously checked data, JSON stringified. */
  private dataJSON: string = null;


  ngOnInit() {
  }


  ngDoCheck() {
    const dataJSONChallenge = JSON.stringify(this.data);

    if (dataJSONChallenge !== null && this.dataJSON !== dataJSONChallenge) {
      this.dataChanged.emit(this.data);
    }

    this.dataJSON = dataJSONChallenge;
  }
}
