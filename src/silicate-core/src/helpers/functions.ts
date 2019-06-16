import {SimpleChanges} from '@angular/core';


export function hasChanged(changes: SimpleChanges, key: string) {
  return changes.hasOwnProperty(key);
}
