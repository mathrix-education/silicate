import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {VideoPlayer} from '../video-player';
import {PlatformService, SilicateService} from '@mathrix-education/silicate-core';
import {DOCUMENT} from '@angular/common';


/** @dynamic */
@Component({
  selector: 'silicate-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit, AfterViewInit, OnChanges, VideoPlayer {
  /** YouTube iframe API */
  private readonly youtubeAPIUrl = 'https://www.youtube.com/iframe_api';

  @Input() videoId: string;
  @ViewChild('player', {static: false}) player: ElementRef<HTMLDivElement>;
  @Output() ready = new EventEmitter();

  constructor(
    private silicate: SilicateService,
    public platform: PlatformService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  youtubePlayer: YT.Player;


  ngOnInit() {
    this.loadYoutubeAPI();
  }


  ngAfterViewInit() {
    this.createYoutubePlayer();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.youtubePlayer && changes.videoId) {
      this.youtubePlayer.cueVideoById(changes.videoId.currentValue as string);
    }
  }

  /**
   * Load the YouTube API only once.
   */
  private loadYoutubeAPI() {
    if (!this.platform.isBrowser) {
      return;
    }

    if (this.document.querySelector(`script[src="${this.youtubeAPIUrl}"]`) === null) {
      const tag = this.document.createElement('script');
      tag.src = this.youtubeAPIUrl;
      const firstScriptTag = this.document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }

  /**
   * Create a YouTube player. Interval is required to avoid the window object use.
   */
  private createYoutubePlayer() {
    if (!this.platform.isBrowser) {
      return;
    }

    const interval = setInterval(() => {
      /*
       * Since we cannot rely on:
       * `window.onYouTubePlayerAPIReady`,
       * we will wait  for the YouTube API to load.
       */
      if (typeof (YT) !== 'undefined' && typeof (YT.Player) !== 'undefined') {
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
        clearInterval(interval);
      }
    }, 100); // We check every 100ms
  }


  play(): void {
    this.youtubePlayer.playVideo();
  }


  setTime(seconds: number): void {
    this.youtubePlayer.seekTo(seconds, true);
  }
}
