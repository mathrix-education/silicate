import {Component, Inject, OnInit} from '@angular/core';
import {BaseBrickComponent, SilicateService} from '@mathrix/silicate-core';
import {TitleBrick} from './title-brick';
import {Heading, TitleBrickAllowedHeadings} from '../../silicate-essentials.tokens';


@Component({
  selector: 'silicate-title-brick',
  templateUrl: './title-brick.component.html',
  styleUrls: ['./title-brick.component.scss']
})
export class TitleBrickComponent extends BaseBrickComponent<TitleBrick> implements OnInit {
  constructor(
    public silicate: SilicateService,
    @Inject(TitleBrickAllowedHeadings) public allowedHeadings: Heading[]) {
    super();
  }

  ngOnInit() {
    if (this.allowedHeadings.indexOf(this.data.heading) === -1) {
      throw new Error(
        `${this.data.heading} is not authorized. To allow it, override the "TitleBrickAllowedHeadings" `
        + 'InjectionToken in @mathrix/silicate-essentials'
      );
    }
  }
}
