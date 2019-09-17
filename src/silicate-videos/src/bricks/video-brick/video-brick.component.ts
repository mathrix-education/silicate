import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component, ViewChild} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix-education/silicate-core';
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
  @ViewChild(VimeoPlayerComponent, {static: false}) vimeoPlayer;
  @ViewChild(YoutubePlayerComponent, {static: false}) youtubePlayer;

  loading = true;


  constructor(public silicate: SilicateService) {
    super();
  }


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


  addAnchor() {
    this.data.summary.push({timestamp: 0, title: 'Nouvelle ancre'});
  }


  onDrag($event: CdkDragDrop<any>) {
    moveItemInArray(this.data.summary, $event.previousIndex, $event.currentIndex);
  }


  setTime(seconds: number): void {
    if (this.silicate.editable) {
      return;
    }

    this.player.setTime(seconds);
  }

  focus(): void {
    return;
  }
}
