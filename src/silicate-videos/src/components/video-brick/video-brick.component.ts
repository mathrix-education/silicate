import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseBrickComponent} from '../../../../silicate-core/src/bricks/base-brick/base-brick.component';
import {VideoPlayer} from '../../players/video-player';
import {VimeoPlayerComponent} from '../../players/vimeo-player/vimeo-player.component';
import {YoutubePlayerComponent} from '../../players/youtube-player/youtube-player.component';
import {VideoBrick} from './video-brick';

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

  @ViewChild(VimeoPlayerComponent, {static: false}) vimeoPlayer;
  @ViewChild(YoutubePlayerComponent, {static: false}) youtubePlayer;

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

  get player(): VideoPlayer {
    switch (this.type) {
      case 'vimeo':
        return this.vimeoPlayer;
      case 'youtube':
        return this.youtubePlayer;
      default:
        return null;
    }
  }

  setTime(seconds: number): void {
    if (this.editable) {
      return;
    }

    this.player.setTime(seconds);
  }
}
