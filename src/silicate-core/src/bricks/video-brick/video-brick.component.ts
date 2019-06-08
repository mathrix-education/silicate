import {Component, OnInit, ViewChild} from '@angular/core';
import {VideoBrick} from './video-brick';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {YTPlayerComponent} from 'angular-youtube-player';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {TextBrickToolbarComponent} from '../../toolbars/text-brick-toolbar/text-brick-toolbar.component';

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
    toolbar: TextBrickToolbarComponent
  };

  @ViewChild('youtubePlayer', {static: false}) youtubePlayer: YTPlayerComponent;

  loading = true;

  get type() {
    return this.model.type;
  }

  set type(type) {
    this.model.type = type;
    this.brickChange.emit(this.model);
  }

  get videoId() {
    return this.model.videoId;
  }

  set videoId(videoId: string) {
    this.model.videoId = videoId;
    this.brickChange.emit(this.model);
    this.youtubePlayer.loadVideoById(this.model.videoId);
  }

  get summary() {
    return this.model.summary;
  }

  set summary(summary: any[]) {
    this.model.summary = summary;
    this.brickChange.emit(this.model);
  }

  ngOnInit() {
  }

  onDrag($event: CdkDragDrop<any>) {
    moveItemInArray(this.summary, $event.previousIndex, $event.currentIndex);
  }

  /**
   * Go to a given timestamp. This is far from satisfying, since we need to reload the YouTube player.
   */
  goToTimestamp(timestamp: number) {
    if (this.editable) {
      return;
    }

    this.youtubePlayer.cueVideoById(this.videoId, timestamp);
    this.youtubePlayer.play();
  }
}
