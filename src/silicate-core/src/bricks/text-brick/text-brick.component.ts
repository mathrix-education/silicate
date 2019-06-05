import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {TextBrick} from './text-brick';
import {TextBrickToolbarComponent} from '../../toolbars/text-brick-toolbar/text-brick-toolbar.component';
import {SilicateHelpers} from '../../silicate.helpers';

@Component({
  selector: 'mtx-text-brick',
  templateUrl: './text-brick.component.html',
  styleUrls: ['./text-brick.component.scss']
})
export class TextBrickComponent extends BaseBrickComponent<TextBrick> implements TextBrick, OnInit {
  static declaration = {
    kind: 'text',
    name: 'Texte',
    icon: 'notes',
    component: TextBrickComponent,
    toolbar: TextBrickToolbarComponent
  };

  @ViewChild('wrapper', {static: true}) wrapper: ElementRef;

  // Brick data
  kind: 'text';
  styleValue: string;
  contentValue: string;

  static empty(): TextBrick {
    return {
      kind: 'text',
      style: 'normal',
      content: 'Texte...'
    };
  }

  get style() {
    return this.styleValue;
  }

  set style(style: string) {
    this.styleValue = style;
    this.brickChange.emit(this.serialize());
  }

  get content() {
    return this.contentValue;
  }

  set content(content: string) {
    // Sanitize content
    this.contentValue = SilicateHelpers.strip(content, '<strong><em>').trim();
    this.brickChange.emit(this.serialize());
  }

  ngOnInit() {
  }

  @HostListener('paste')
  onPaste() {
    setTimeout(() => this.content = this.wrapper.nativeElement.innerHTML);
  }

  /**
   * Wrap a selection into a given tag.
   */
  wrap(tag: string) {
    const selection = document.getSelection();

    if (selection.isCollapsed) {
      return;
    }

    if (selection.anchorNode === selection.focusNode) {
      // Easy case
      const range = selection.getRangeAt(0);
      const surroundNode = document.createElement(tag);
      range.surroundContents(surroundNode);
    }

    this.content = this.wrapper.nativeElement.innerHTML;
  }

  serialize(): TextBrick {
    return {
      kind: this.kind,
      style: this.style,
      content: this.content
    };
  }
}
