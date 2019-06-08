import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'mtx-vimeo-player',
  templateUrl: './vimeo-player.component.html',
  styleUrls: ['./vimeo-player.component.scss']
})
export class VimeoPlayerComponent implements OnInit {
  @Input() videoId;
  @ViewChild('player', {static: true}) player: ElementRef<HTMLDivElement>;

  @Output() ready = new EventEmitter();

  vimeoPlayer: Player;
  playerId: string;

  constructor() {
  }

  ngOnInit() {
    this.videoId = parseInt(this.videoId, 0);

    this.vimeoPlayer = new Player(this.player.nativeElement, {
      id: this.videoId
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
  }
}
