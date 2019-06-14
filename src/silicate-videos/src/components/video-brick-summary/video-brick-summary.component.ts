import {Component, Input, OnInit} from '@angular/core';
import {SilicateService} from '@mathrix/silicate-core/src/services/silicate/silicate.service';
import {VideoBrick} from '../video-brick/video-brick';

@Component({
  selector: 'mtx-video-brick-summary',
  templateUrl: './video-brick-summary.component.html',
  styleUrls: ['./video-brick-summary.component.scss']
})
export class VideoBrickSummaryComponent implements OnInit {
  @Input() index: number;

  constructor(public silicate: SilicateService) {
  }

  ngOnInit() {
  }

  getAnchor(index: number) {
    const videoBrick: VideoBrick = this.silicate.get(this.index);
    return videoBrick.summary[index];
  }

  setAnchor(index) {

  }

  getTimestamp(index: number) {
    const videoBrick: VideoBrick = this.silicate.get(this.index);
    return videoBrick.summary[index].timestamp;
  }

  setTimestamp(index: number, value: number) {

  }
}
