/**
 * Strip a silicate brick to be sent to the API
 * @param brick The brick to strip
 */
import {BaseBrick} from '../bricks/base-brick/base-brick';

export function StripBrick(brick: BaseBrick) {
  delete brick.state;
  return brick;
}
