import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {BaseBrickComponent, SilicateDirective, SilicateService, WallService} from '@mathrix-education/silicate-core';
import {TitleBrick} from './title-brick';
import {Heading, TitleBrickAllowedHeadings} from '../../silicate-essentials.tokens';
import {TextBrickFactory} from '../text-brick/text-brick.factory';


@Component({
  selector: 'silicate-title-brick',
  templateUrl: './title-brick.component.html',
  styleUrls: ['./title-brick.component.scss']
})
export class TitleBrickComponent extends BaseBrickComponent<TitleBrick> implements OnInit {
  @ViewChild(SilicateDirective, {static: false}) silicateTitle: SilicateDirective;

  constructor(
    public silicate: SilicateService,
    private wall: WallService,
    private textBrickFactory: TextBrickFactory,
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

  /**
   * When pressing "enter" in a heading with SilicateDirective, create new TextBrick below.
   */
  onEnter($event: KeyboardEvent): void {
    $event.preventDefault();

    const index = this.wall.indexOf(this.data);
    this.wall.insertAndFocus(index + 1, this.textBrickFactory.make());
  }

  changeHeading(heading: Heading) {
    this.data.heading = heading;
    this.dataChange.emit();
  }

  focus(): void {
    this.silicateTitle.focus();
  }
}
