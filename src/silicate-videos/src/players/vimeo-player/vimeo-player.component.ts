import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import Player from '@vimeo/player';
import {VideoPlayer} from '../video-player';


@Component({
  selector: 'mtx-vimeo-player',
  templateUrl: './vimeo-player.component.html',
  styleUrls: ['./vimeo-player.component.scss']
})
export class VimeoPlayerComponent implements OnInit, VideoPlayer {
  @Input() videoId: string;
  @ViewChild('player', {static: true}) player: ElementRef<HTMLDivElement>;
  @Output() ready = new EventEmitter();

  vimeoPlayer: Player;


  constructor() {
  }


  ngOnInit() {
    this.vimeoPlayer = new Player(this.player.nativeElement, {
      id: parseInt(this.videoId, 0)
    });

    // Setup events
    this.vimeoPlayer.on('loaded', (e) => {
      this.ready.emit();
    });
  }


  play() {
    this.vimeoPlayer.play();
  }


  setTime(seconds: number) {
    this.vimeoPlayer.setCurrentTime(seconds);
    this.vimeoPlayer.play();
  }
}
