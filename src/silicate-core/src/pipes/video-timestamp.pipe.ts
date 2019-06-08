import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'videoTimestamp'
})
export class VideoTimestampPipe implements PipeTransform {
  transform(videoTimestamp: number): string {
    const minutes = Math.floor(videoTimestamp / 60);
    const seconds = videoTimestamp - minutes * 60;
    const secondsStr = '' + (seconds < 10 ? '0' + seconds : seconds);

    return `${minutes}:${secondsStr}`;
  }
}
