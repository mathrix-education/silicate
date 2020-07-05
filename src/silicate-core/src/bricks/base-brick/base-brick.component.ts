import {Input} from '@angular/core';
import {BaseBrick} from './base-brick';


/**
 * The base class for brick component.
 */
export abstract class BaseBrickComponent<T extends BaseBrick = BaseBrick>{
  /** [data] in binding */
  @Input() data: T;
}
