import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {PDFViewerBrickComponent} from './pdf-viewer-brick.component';
import {PDFViewerBrickFactory} from './pdf-viewer-brick.factory';


export const PDFViewerBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'pdf-viewer',
    icon: 'functions',
    name: 'PDF',
    component: PDFViewerBrickComponent,
    factory: PDFViewerBrickFactory
  }
};
