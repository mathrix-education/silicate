import {TextBrick} from '../../bricks/text-brick/text-brick';
import {TextBrickComponent} from '../../bricks/text-brick/text-brick.component';
import {SilicateService} from './silicate.service';

let instance: SilicateService;

beforeEach(() => {
  instance = new SilicateService();
});

test('set bricks', () => {
  instance.bricks = [TextBrickComponent];

  expect(instance.mappings).toEqual({
    text: {
      icon: TextBrickComponent.icon,
      displayName: TextBrickComponent.displayName,
      component: TextBrickComponent
    }
  });
});

test('set data partially', (done) => {
  instance.bricks = [TextBrickComponent];

  instance.data$.subscribe((d) => {
    if (d.length > 0) {
      console.log(d);
      done();
    }
  });

  instance.data[0] = {
    kind: 'text',
    content: 'This is a test'
  } as TextBrick;
});

test('test', () => {
  // Watch subscription
  instance.test$.subscribe((v) => console.log('sub', v));

  // 1) Full replace, subscription triggered
  instance.test = {kind: 'text', content: 'fullreplace'};

  // 2) Partial replace, subscription not triggered
  instance.test.content = 'aa';

  console.log('end', instance.test); // But the value of the BehaviorSubject was updated! WTF?!
});
