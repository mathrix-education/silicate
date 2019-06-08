import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {VideoBrick} from './video-brick';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {YTPlayerComponent} from 'angular-youtube-player';

@Component({
  selector: 'mtx-video-brick',
  templateUrl: './video-brick.component.html',
  styleUrls: ['./video-brick.component.scss']
})
export class VideoBrickComponent extends BaseBrickComponent<VideoBrick> implements OnInit {
  static declaration = {
    kind: 'video',
    name: 'Vidéo',
    icon: 'movie',
    component: VideoBrickComponent,
    toolbar: null
  };

  @ViewChild('youtubePlayer', {static: false}) youtubePlayer: YTPlayerComponent;

  loading = true;

  get videoId() {
    return this.model.videoId;
  }

  set videoId(videoId: string) {
    this.model.videoId = videoId;
    this.brickChange.emit();
  }

  get summary() {
    return this.model.summary;
  }

  set summary(summary: { [timestamp: number]: string }) {
    this.model.summary = summary;
    this.brickChange.emit();
  }

  ngOnInit() {
  }

  /**
   * Go to a given timestamp. This is far from satisfying, since we need to reload the YouTube player.
   */
  goToTimestamp(timestamp: number) {
    this.youtubePlayer.loadVideoById(this.videoId, timestamp);
    this.youtubePlayer.play();
  }
}
