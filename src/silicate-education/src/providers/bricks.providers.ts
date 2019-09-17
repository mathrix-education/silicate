import {Brick, Bricks, TypedValueProvider} from '@mathrix-education/silicate-core';
import {BlockBrickComponent} from '../bricks/block/block-brick.component';
import {BlockBrickFactory} from '../bricks/block/block-brick.factory';
import {ContainerBrickComponent} from '../bricks/container/container-brick.component';
import {ContainerBrickFactory} from '../bricks/container/container-brick.factory';
import {PDFViewerBrickComponent} from '../bricks/pdf-viewer/pdf-viewer-brick.component';
import {PDFViewerBrickFactory} from '../bricks/pdf-viewer/pdf-viewer-brick.factory';

export const BlockBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'block',
    icon: 'dashboard',
    name: 'Bloc',
    component: BlockBrickComponent,
    factory: BlockBrickFactory
  }
};
export const ContainerBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'container',
    icon: 'dashboard',
    name: 'Containeur',
    component: ContainerBrickComponent,
    factory: ContainerBrickFactory
  }
};
export const PDFViewerBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'pdf-viewer',
    icon: 'chrome_reader_mode',
    name: 'PDF',
    component: PDFViewerBrickComponent,
    factory: PDFViewerBrickFactory
  }
};
