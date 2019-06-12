import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseBrickComponent} from '@mathrix/silicate-core';
import {SilicateService} from '@mathrix/silicate-core';
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

  mappings = {
    youtube: 'YouTube',
    vimeo: 'Vimeo'
  };

  loading = true;


  constructor(public silicate: SilicateService) {
    super();
  }

  ngOnInit() {
  }

  onDrag($event: CdkDragDrop<any>) {
    moveItemInArray(this.model.summary, $event.previousIndex, $event.currentIndex);
  }

  get player(): VideoPlayer {
    switch (this.model.type) {
      case 'vimeo':
        return this.vimeoPlayer;
      case 'youtube':
        return this.youtubePlayer;
      default:
        return null;
    }
  }

  setTime(seconds: number): void {
    this.player.setTime(seconds);
  }
}
