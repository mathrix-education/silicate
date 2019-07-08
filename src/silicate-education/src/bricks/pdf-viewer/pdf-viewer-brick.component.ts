import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {PDFViewerBrick} from './pdf-viewer-brick';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'edu-pdf-viewer-brick',
  templateUrl: './pdf-viewer-brick.component.html',
  styleUrls: ['./pdf-viewer-brick.component.scss']
})
export class PDFViewerBrickComponent extends BaseBrickComponent<PDFViewerBrick> implements OnInit {
  texts = {
    open: 'Ouvrir le document',
    close: 'Fermer le document'
  };

  viewerOpen = true;

  constructor(
    public silicate: SilicateService,
    private sanitizer: DomSanitizer
  ) {
    super();
  }


  ngOnInit() {
  }

  pdf() {
    return this.sanitizer.bypassSecurityTrustUrl(this.data.url);
  }
}
