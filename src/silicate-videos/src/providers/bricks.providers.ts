import {Brick, Bricks, TypedValueProvider} from '@mathrix-education/silicate-core';
import {VideoBrickComponent} from '../bricks/video-brick/video-brick.component';

export const VideoBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'video',
    component: VideoBrickComponent,
  }
};
