import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SilicateService} from '@mathrix-education/silicate-core';


@Component({
  selector: 'silicate-video-brick-anchor',
  templateUrl: './video-brick-anchor.component.html',
  styleUrls: ['./video-brick-anchor.component.scss']
})
export class VideoBrickAnchorComponent implements OnInit {
  @Input() timestamp: number;
  @Output() timestampChange = new EventEmitter<number>();

  private model = {
    timestamp: null,
    minutesStr: null,
    secondsStr: null
  };


  constructor(public silicate: SilicateService) {
  }


  get minutesStr() {
    return this.model.minutesStr;
  }


  set minutesStr(minutesStr) {
    this.model.minutesStr = minutesStr.replace(/[^0-9]/g, '');
    this.refreshTimestamp();
  }


  get secondsStr() {
    return this.model.secondsStr;
  }


  set secondsStr(secondsStr) {
    this.model.secondsStr = secondsStr.replace(/[^0-9]/g, '');
    this.refreshTimestamp();
  }


  ngOnInit() {
    this.refreshStrings();
  }


  refreshTimestamp() {
    if (this.minutesStr !== '' && this.secondsStr !== '') {
      const minutes = parseInt(this.minutesStr, 0);
      const seconds = parseInt(this.secondsStr, 0);
      this.timestamp = minutes * 60 + seconds;
      this.timestampChange.emit(this.timestamp);
    }
  }


  refreshStrings() {
    const minutes = Math.floor(this.timestamp / 60);
    const seconds = this.timestamp - minutes * 60;

    this.minutesStr = minutes.toString();
    this.secondsStr = seconds < 10 ? `0${seconds}` : seconds.toString();
  }
}
