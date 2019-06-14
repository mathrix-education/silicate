import {Input} from '@angular/core';
import {SilicateService} from '../../services/silicate/silicate.service';
import {BaseBrick} from './base-brick';

export abstract class BaseBrickComponent<T extends BaseBrick = BaseBrick> {
  /**
   * BaseBrickComponent declaration.
   * In this case, it is pretty irrelevant but allow surcharging the declaration.
   */
  static readonly kind: string = 'none';
  static readonly icon: string = 'settings';
  static readonly displayName: string = 'none';

  /** The index of the brick in the SilicateService */
  @Input() index: number;

  constructor(public silicate: SilicateService) {
  }

  static empty() {
    return {};
  }

  get(key: string = null): any {
    if (key === null) {
      return this.silicate.get(this.index);
    } else {
      return this.silicate.get(this.index)[key];
    }
  }

  set(key: string, value: any) {
    const original: T = this.get(null) as T;
    original[key] = value;
    this.silicate.patch(this.index, original);
  }
}
