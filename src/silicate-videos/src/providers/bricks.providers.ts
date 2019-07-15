import {Brick, Bricks, TypedValueProvider} from '@mathrix/silicate-core';
import {VideoBrickComponent} from '../bricks/video-brick/video-brick.component';
import {VideoBrickFactory} from '../bricks/video-brick/video-brick.factory';

export const VideoBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'video',
    icon: 'movie',
    name: 'Vidéo',
    component: VideoBrickComponent,
    factory: VideoBrickFactory
  }
};
