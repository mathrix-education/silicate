import {v4 as uuid} from 'uuid';


export interface BaseBrick {
  uuid: string;
  kind: string;
}


/**
 * BaseBrickFactory declaration.
 * In this case, it is pretty irrelevant but allow surcharging the declaration.
 */
export abstract class BaseBrickFactory<T = BaseBrick> {
  protected withUuid(data) {
    return {...{uuid: uuid()}, ...data};
  }


  abstract make();
}
