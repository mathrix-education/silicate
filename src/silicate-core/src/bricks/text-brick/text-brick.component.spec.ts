import {TextBrick} from './text-brick';
import {TextBrickComponent} from './text-brick.component';

// Mocks
let instance: TextBrickComponent;

beforeAll(() => {
  instance = new TextBrickComponent();
});

describe('set style', () => {
  test('newStyle should emit brickChange event', (done) => {
    const testStyle = 'test';

    instance.brickChange.subscribe(newStyle => {
      expect(newStyle).toEqual({style: testStyle});
      done();
    });

    instance.style = testStyle;
  });
});

describe('set content', () => {
  test('newContent should emit brickChange event', (done) => {
    const testContent = 'I am the new content';

    instance.brickChange.subscribe((newContent: TextBrick) => {
      expect(newContent.content).toBe(testContent);
      done();
    });

    instance.content = testContent;
  });
});
