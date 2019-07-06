import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {PDFViewerBrick} from './pdf-viewer-brick';

@Injectable({
  providedIn: SilicateCoreModule
})
export class PDFViewerBrickFactory extends BaseBrickFactory<PDFViewerBrick> {
  make(): PDFViewerBrick {
    return this.withUuid({
      kind: 'pdf-viewer',
      url: 'http://www.orimi.com/pdf-test.pdf'
    });
  }
}
