import {BaseBrick} from '../bricks/base-brick/base-brick';
import {Wall} from '../interfaces/wall';

/**
 * Strip a silicate brick to be sent to the API
 * @param brick The brick to strip
 */
function stripBrick(brick: BaseBrick) {
  delete brick.state;
}

/**
 * Recursively strip bricks
 * @param brick The brick to strip
 */
function recursiveStrip(brick: BaseBrick) {
  /** for each property of the brick */
  Object.keys(brick).forEach(((brickElement: string) => {
    if (brick[brickElement].kind) { // if object is a brick
      recursiveStrip(brick);
    } else if (Array.isArray(brick[brickElement])) { // if object is an array
      brick[brickElement].forEach((iterableElement) => {
        recursiveStrip(iterableElement);
      });
    }
  }));
  stripBrick(brick)
}

/**
 * Return a stripped copy of the wall
 * @param wall The wall to be stripped
 */
export function stripWall(wall: Wall): Wall {
  /** for each brick in Wall */
  const returnedWall = JSON.parse(JSON.stringify(wall));
  returnedWall.forEach((brick: BaseBrick) => {
    recursiveStrip(brick);
  });
  return returnedWall;
}
