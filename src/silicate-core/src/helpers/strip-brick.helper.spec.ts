import {stripWall} from './strip-brick.helper';

describe('strip-brick', () => {
  it('should stripe elements', () => {
    const simpleCaseWall = [{
      state: {s: 1},
      kind: 'brick_a'
    }, {
      b: [{}, {c: 'iterable'}, {state: {a: {state: {b: 3}}}}],
      c: []
    }];

    const simpleStrippedCaseExpect = [{kind: 'brick_a'}, {
      b: [{}, {c: 'iterable'}, {}],
      c: []
    }];
    stripWall(simpleCaseWall);
    expect(JSON.parse(JSON.stringify(simpleStrippedCaseExpect))).toEqual(JSON.parse(JSON.stringify(simpleCaseWall)));
  });

});
