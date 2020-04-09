import {Component} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix-education/silicate-core';
import {PDFViewerBrick} from './pdf-viewer-brick';


@Component({
  selector: 'edu-question-brick',
  templateUrl: './pdf-viewer-brick.component.html',
  styleUrls: ['./pdf-viewer-brick.component.scss']
})
export class PDFViewerBrickComponent extends BaseBrickComponent<PDFViewerBrick> {
  texts = {
    open: 'Ouvrir le document',
    close: 'Fermer le document'
  };

  viewerOpen = false;

  constructor(public silicate: SilicateService) {
    super();
  }

  focus(): void {
    return;
  }
}
