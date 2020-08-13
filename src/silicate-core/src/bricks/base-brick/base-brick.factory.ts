import {v4 as uuid} from 'uuid';
import {BaseBrick} from './base-brick';

/**
 * BaseBrickFactory declaration.
 * In this case, it is pretty irrelevant but allow surcharging the declaration.
 */
export abstract class BaseBrickFactory<T extends BaseBrick> {
  protected withUuid(data): T {
    return {...data, uuid: uuid()};
  }


  abstract make();
}
