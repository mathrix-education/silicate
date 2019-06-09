/// <reference types="youtube" />
import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {hasChanged} from '../../../../silicate-core/src/helpers/functions';
import {VideoPlayer} from '../video-player';

@Component({
  selector: 'mtx-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit, OnChanges, VideoPlayer {
  @Input() videoId: string;
  @ViewChild('player', {static: true}) player: ElementRef<HTMLDivElement>;
  @Output() ready = new EventEmitter();

  youtubePlayer: YT.Player;

  ngOnInit() {
    if (typeof (YT) === 'undefined' || typeof (YT.Player) === 'undefined') {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // @ts-ignore
    window.onYouTubePlayerAPIReady = () => {
      this.youtubePlayer = new YT.Player(this.player.nativeElement, {
        videoId: this.videoId,
        playerVars: {
          modestbranding: YT.ModestBranding.Modest,
          rel: YT.RelatedVideos.Hide
        },
        events: {
          onReady: () => this.ready.emit()
        }
      });
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.youtubePlayer && hasChanged(changes, 'videoId')) {
      this.youtubePlayer.cueVideoById(changes.videoId.currentValue as string);
    }
  }

  play(): void {
    this.youtubePlayer.playVideo();
  }

  setTime(seconds: number): void {
    this.youtubePlayer.seekTo(seconds, true);
  }
}
