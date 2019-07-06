import {Component, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {PDFViewerBrick} from './pdf-viewer-brick';


@Component({
  selector: 'edu-introduction-brick',
  templateUrl: './introduction-brick.component.html',
  styleUrls: ['./introduction-brick.component.scss']
})
export class PDFViewerBrickComponent extends BaseBrickComponent<PDFViewerBrick> implements OnInit {
  constructor(public silicate: SilicateService) {
    super();
  }


  ngOnInit() {
  }
}
