import {ImageBrickComponent} from './bricks/image-brick/image-brick.component';
import {TextBrickComponent} from './bricks/text-brick/text-brick.component';
import {VideoBrickComponent} from './bricks/video-brick/video-brick.component';

export const bricksDeclarations = {
  text: {
    name: 'Texte',
    icon: 'notes',
    component: TextBrickComponent
  },
  image: {
    name: 'Image',
    icon: 'image',
    component: ImageBrickComponent
  },
  video: {
    name: 'Vidéo',
    icon: 'movie',
    component: VideoBrickComponent
  }
};
