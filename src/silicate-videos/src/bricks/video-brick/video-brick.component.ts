import {Component, ViewChild} from '@angular/core';
import {BaseBrickComponent} from '@mathrix-education/silicate-core';
import {VideoPlayer} from '../../players/video-player';
import {VimeoPlayerComponent} from '../../players/vimeo-player/vimeo-player.component';
import {YoutubePlayerComponent} from '../../players/youtube-player/youtube-player.component';
import {VideoBrick} from './video-brick';


@Component({
  selector: 'silicate-video-brick',
  templateUrl: './video-brick.component.html',
  styleUrls: ['./video-brick.component.scss']
})
export class VideoBrickComponent extends BaseBrickComponent<VideoBrick> {
  @ViewChild(VimeoPlayerComponent) vimeoPlayer;
  @ViewChild(YoutubePlayerComponent) youtubePlayer;

  loading = true;

  get player(): VideoPlayer {
    switch (this.data.type) {
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
