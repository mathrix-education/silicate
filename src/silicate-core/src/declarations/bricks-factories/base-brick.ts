import {v4 as uuid} from 'uuid';


export interface BaseBrick {
  uuid: string;
  kind: string;
}


/**
 * BaseBrickFactory declaration.
 * In this case, it is pretty irrelevant but allow surcharging the declaration.
 */
export abstract class BaseBrickFactory {
  static readonly kind: string = 'none';
  static readonly icon: string = 'settings';
  static readonly displayName: string = 'none';


  protected static withUuid(data) {
    return {...{uuid: uuid()}, ...data};
  }


  protected static make() {
    throw new Error('BaseBrickFactory.make() has to be implemented!');
  }
}
