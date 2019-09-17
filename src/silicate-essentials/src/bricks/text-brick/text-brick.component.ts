import {Component, ViewChild} from '@angular/core';
import {BaseBrickComponent, SilicateDirective, WallService} from '@mathrix-education/silicate-core';
import {TextBrick} from './text-brick';
import {TextBrickFactory} from './text-brick.factory';
import {first} from 'rxjs/operators';


@Component({
  selector: 'silicate-text-brick',
  templateUrl: './text-brick.component.html',
  styleUrls: ['./text-brick.component.scss']
})
export class TextBrickComponent extends BaseBrickComponent<TextBrick> {
  @ViewChild(SilicateDirective, {static: false}) paragraph: SilicateDirective;

  constructor(private wall: WallService, private textBrickFactory: TextBrickFactory) {
    super();
  }

  onEnter($event: KeyboardEvent): void {
    $event.preventDefault();

    const index = this.wall.indexOf(this.data);
    this.wall.insertAndFocus(index + 1, this.textBrickFactory.make());
  }

  focus(): void {
    if (this.paragraph !== undefined) {
      this.paragraph.focus();
    } else {
      this.afterViewInit$.pipe(first()).subscribe(() => {
        this.paragraph.focus();
      });
    }
  }
}
