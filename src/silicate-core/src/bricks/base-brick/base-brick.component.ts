import {AfterViewInit, DoCheck, EventEmitter, Input, Output} from '@angular/core';
import {BaseBrick} from './base-brick';


/**
 * The base class for brick component.
 */
export abstract class BaseBrickComponent<T extends BaseBrick = BaseBrick> implements AfterViewInit, DoCheck {
  /** [data] in binding */
  @Input() data: T;
  /** (data) out binding */
  @Output() dataChange = new EventEmitter<T>();

  /** Fired when the ngAfterViewInit is called */
  protected afterViewInit$ = new EventEmitter();

  /** The previously checked data, JSON stringified. */
  private dataJSON: string = null;

  /**
   * AfterViewInit hook
   */
  ngAfterViewInit(): void {
    this.afterViewInit$.emit();
  }

  /**
   * We will only emit the change if the data objects are structurally different.
   * This is not the best way to do so, but it should work perfectly.
   */
  ngDoCheck() {
    const dataJSONChallenge = JSON.stringify(this.data);

    if (dataJSONChallenge !== null && this.dataJSON !== dataJSONChallenge) {
      this.dataChange.emit(this.data);
    }

    this.dataJSON = dataJSONChallenge;
  }


  /**
   * Define the behavior when the brick is focused (e.g. focus the right silicate directive for example).
   */
  abstract focus(): void;
}
