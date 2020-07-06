import {Brick, Bricks, TypedValueProvider} from '@mathrix-education/silicate-core';
import {BlockBrickComponent} from '../bricks/block/block-brick.component';
import {ContainerBrickComponent} from '../bricks/container/container-brick.component';
import {PDFViewerBrickComponent} from '../bricks/pdf-viewer/pdf-viewer-brick.component';

export const BlockBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'block',
    component: BlockBrickComponent,
  }
};
export const ContainerBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'container',
    component: ContainerBrickComponent,
  }
};
export const PDFViewerBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'pdf-viewer',
    component: PDFViewerBrickComponent,
  }
};
