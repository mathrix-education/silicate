import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
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
  static readonly kind = 'video';
  static readonly icon = 'movie';
  static readonly displayName = 'Vidéo';

  @ViewChild(VimeoPlayerComponent, {static: false}) vimeoPlayer;
  @ViewChild(YoutubePlayerComponent, {static: false}) youtubePlayer;

  loading = true;


  constructor(public silicate: SilicateService) {
    super(silicate);
  }

  ngOnInit() {
  }

  get player(): VideoPlayer {
    switch (this.get('type')) {
      case 'vimeo':
        return this.vimeoPlayer;
      case 'youtube':
        return this.youtubePlayer;
      default:
        return null;
    }
  }

  get type() {
    return this.get('type');
  }

  set type(newType: string) {
    this.set('type', newType);
  }

  get videoId() {
    return this.get('videoId');
  }

  set videoId(newVideoId: string) {
    this.set('videoId', newVideoId);
  }

  onDrag($event: CdkDragDrop<any>) {
    const summary = this.get('summary');
    moveItemInArray(summary, $event.previousIndex, $event.currentIndex);
    this.set('summary', summary);
  }

  setTime(seconds: number): void {
    if (this.silicate.editable) {
      return;
    }

    this.player.setTime(seconds);
  }
}
