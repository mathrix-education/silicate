import {Component, OnInit} from '@angular/core';
import {TextBrickComponent} from '../../bricks/text-brick/text-brick.component';
import {BaseBrickToolbarComponent} from '../base-brick-toolbar/base-brick-toolbar.component';

@Component({
  selector: 'mtx-text-brick-toolbar',
  templateUrl: './text-brick-toolbar.component.html',
  styleUrls: ['./text-brick-toolbar.component.scss']
})
export class TextBrickToolbarComponent extends BaseBrickToolbarComponent<TextBrickComponent> implements OnInit {
  ngOnInit() {
  }
}
