import {v4 as uuid} from 'uuid';

/**
 * Recursively replace the uuid from a brick to be copied.
 * @param brick The brick.
 */
export function recursiveReplace(brick) {

  if (brick?.uuid !== undefined) {
    brick.uuid = uuid();
  }

  Object.keys(brick ?? []).forEach((key) => {
    if (brick[key] instanceof Array) {
      brick[key] = brick[key].map(v => recursiveReplace(v));
    } else if (typeof brick[key] === 'object') {
      brick[key] = recursiveReplace(brick[key])
    }
  });

  return brick;
}
