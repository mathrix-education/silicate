import {Component} from '@angular/core';
import {BaseBrickComponent} from '@mathrix-education/silicate-core';
import {PDFViewerBrick} from './pdf-viewer-brick';


@Component({
  selector: 'edu-question-brick',
  templateUrl: './pdf-viewer-brick.component.html',
  styleUrls: ['./pdf-viewer-brick.component.scss']
})
export class PDFViewerBrickComponent extends BaseBrickComponent<PDFViewerBrick> {
  /** The text when player is opened or closed. */
  readonly texts = {
    open: 'Ouvrir le document',
    close: 'Fermer le document'
  };
  /** If the viewer is opened. */
  viewerOpen = false;
}
