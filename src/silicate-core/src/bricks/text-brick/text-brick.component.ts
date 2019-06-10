import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SilicateService} from '../../services/silicate/silicate.service';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {TextBrick} from './text-brick';

@Component({
  selector: 'mtx-text-brick',
  templateUrl: './text-brick.component.html',
  styleUrls: ['./text-brick.component.scss']
})
export class TextBrickComponent extends BaseBrickComponent<TextBrick> {
  static readonly kind = 'text';
  static config = {
    name: 'Texte',
    icon: 'notes'
  };
  static readonly icon = 'notes';
  static declaration = {
    kind: 'text',
    name: 'Texte',
    icon: 'notes',
    component: TextBrickComponent,
    toolbar: null
  };

  @ViewChild('wrapper', {static: true}) wrapper: ElementRef<HTMLDivElement>;

  constructor(
    public silicate: SilicateService,
    private dialog: MatDialog
  ) {
    super();
  }

  get style() {
    return this.model.style;
  }

  set style(style: string) {
    this.model.style = style;
    this.brickChange.emit(this.model);
  }

  get content() {
    return this.model.content;
  }

  set content(content: string) {
    this.model.content = content;
    this.brickChange.emit(this.model);
  }

  static empty(): TextBrick {
    return {
      kind: 'text',
      style: 'normal',
      content: 'Texte...'
    };
  }
}
