import {ElementRef, EventEmitter} from '@angular/core';


export interface VideoPlayer {
  videoId: string;
  player: ElementRef<HTMLDivElement>;
  ready: EventEmitter<any>;

  play(): void;

  setTime(seconds: number): void;
}
