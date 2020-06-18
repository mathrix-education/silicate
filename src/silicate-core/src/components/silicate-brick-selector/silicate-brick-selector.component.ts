import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Brick} from '../../interfaces/brick';
import {SilicateService} from '../../services/silicate/silicate.service';


@Component({
  selector: 'silicate-brick-selector',
  templateUrl: './silicate-brick-selector.component.html',
  styleUrls: ['./silicate-brick-selector.component.scss']
})
export class SilicateBrickSelectorComponent {
  @Input() allowist: string[];
  @Output() select = new EventEmitter<Brick>();

  constructor(public silicate: SilicateService) {
  }

  /**
   * Return the allowed bricks inside the current brick.
   */
  get allowed(): Brick[] {
    if (this.allowist === undefined) {
      return this.silicate.bricksDeclarations;
    } else {
      return this.allowist.map((kind: string) => this.silicate.resolve(kind));
    }
  }

}
