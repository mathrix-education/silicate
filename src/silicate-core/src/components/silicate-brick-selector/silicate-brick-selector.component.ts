import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Brick} from '../../interfaces/brick';
import {SilicateService} from '../../services/silicate/silicate.service';


@Component({
  selector: 'silicate-brick-selector',
  templateUrl: './silicate-brick-selector.component.html',
  styleUrls: ['./silicate-brick-selector.component.scss']
})
export class SilicateBrickSelectorComponent {
  @Input() icon: string = null;
  @Input() kind: string = null;
  @Input() label: string = null;
  @Output() select = new EventEmitter<Brick>();

  constructor(public silicate: SilicateService) {
  }
}
