import {Injectable} from '@angular/core';
import {BaseBrickFactory, SilicateCoreModule} from '@mathrix/silicate-core';
import {VideoBrick} from './video-brick';


@Injectable({
  providedIn: SilicateCoreModule
})
export class VideoBrickFactory extends BaseBrickFactory<VideoBrick> {
  make(): VideoBrick {
    return this.withUuid({
      kind: 'video',
      type: 'youtube',
      videoId: '9rkhji8eX3c',
      summary: [
        {
          timestamp: 30,
          title: 'Le bac de Filipi'
        },
        {
          timestamp: 236,
          title: 'Présentation des formations'
        }
      ]
    });
  }
}
