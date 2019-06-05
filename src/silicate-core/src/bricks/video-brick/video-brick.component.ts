import {Component, OnInit} from '@angular/core';
import {VideoBrick} from './video-brick';

@Component({
  selector: 'mtx-video-brick',
  templateUrl: './video-brick.component.html',
  styleUrls: ['./video-brick.component.scss']
})
export class VideoBrickComponent implements VideoBrick, OnInit {
  kind: 'video';
  src: string;

  ngOnInit() {
  }
}
