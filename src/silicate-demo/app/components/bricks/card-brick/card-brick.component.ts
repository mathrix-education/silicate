import {Component} from '@angular/core';
import {BaseBrickComponent} from '@mathrix/silicate-core';
import {SilicateService} from '@mathrix/silicate-core';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {SilicateLatexModule} from '@mathrix/silicate-latex';
import {SilicateVideosModule} from '@mathrix/silicate-videos';
import {CardBrick} from './card-brick';

@Component({
  selector: 'app-card-brick',
  templateUrl: './card-brick.component.html',
  styleUrls: ['./card-brick.component.scss']
})
export class CardBrickComponent extends BaseBrickComponent<CardBrick> {
  static kind = 'card';
  static icon = 'dashboard';
  static displayName = 'Carte';

  bricks = [
    ...SilicateCoreModule.bricks(),
    ...SilicateLatexModule.bricks(),
    ...SilicateVideosModule.bricks()
  ];

  constructor(public silicate: SilicateService) {
    super();
  }
}
