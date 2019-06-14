import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component, KeyValueDiffers, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
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

  constructor(
    public silicate: SilicateService,
    protected differs: KeyValueDiffers
  ) {
    super(differs);
  }

  ngOnInit() {
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
    this.dataChanged.emit(this.data);
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
}
