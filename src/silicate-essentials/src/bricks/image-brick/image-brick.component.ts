import {Component} from '@angular/core';
import {BaseBrickComponent} from '@mathrix-education/silicate-core';
import {ImageBrick} from './image-brick';


@Component({
  selector: 'silicate-image-brick',
  templateUrl: './image-brick.component.html',
  styleUrls: ['./image-brick.component.scss']
})
export class ImageBrickComponent extends BaseBrickComponent<ImageBrick> {
  /** If the image is displayed in fullscreen. */
  fullscreen = false;

  /**
   * Open the edit dialog or fullscreen according to the edit mode.
   */
  openFullScreen() {
    this.fullscreen = !this.fullscreen;
  }
}
