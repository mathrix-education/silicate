import {Brick, Bricks, TypedValueProvider} from '@mathrix-education/silicate-core';
import {BlockBrickComponent} from '../bricks/block/block-brick.component';
import {BlockBrickFactory} from '../bricks/block/block-brick.factory';
import {ContainerBrickComponent} from '../bricks/container/container-brick.component';
import {ContainerBrickFactory} from '../bricks/container/container-brick.factory';
import {PDFViewerBrickComponent} from '../bricks/pdf-viewer/pdf-viewer-brick.component';
import {PDFViewerBrickFactory} from '../bricks/pdf-viewer/pdf-viewer-brick.factory';
import {QuestionBrickComponent} from '../bricks/question/question-brick.component';
import {QuestionBrickFactory} from '../bricks/question/question-brick-factory.service';

export const BlockBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'block',
    icon: 'dashboard',
    name: 'Piège, remarque...',
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
    name: 'Définition, exemple...',
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

export const QuestionBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'question',
    icon: 'live_help',
    name: 'Question',
    component: QuestionBrickComponent,
    factory: QuestionBrickFactory
  }
};
