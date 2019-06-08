import {Component, ElementRef, ViewChild} from '@angular/core';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {TextBrick} from './text-brick';
import {TextBrickToolbarComponent} from '../../toolbars/text-brick-toolbar/text-brick-toolbar.component';
import {DomHelpers} from '../../helpers/dom-helpers';

@Component({
  selector: 'mtx-text-brick',
  templateUrl: './text-brick.component.html',
  styleUrls: ['./text-brick.component.scss']
})
export class TextBrickComponent extends BaseBrickComponent<TextBrick> {
  static declaration = {
    kind: 'text',
    name: 'Texte',
    icon: 'notes',
    component: TextBrickComponent,
    toolbar: TextBrickToolbarComponent
  };

  @ViewChild('wrapper', {static: true}) wrapper: ElementRef<HTMLDivElement>;

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
    // Sanitize content
    this.model.content = DomHelpers.stripHtml(content, '<i><b><a>');
    this.brickChange.emit(this.model);
  }

  static empty(): TextBrick {
    return {
      kind: 'text',
      style: 'normal',
      content: 'Texte...'
    };
  }

  /**
   * Wrap a selection into a given tag.
   */
  wrap(command: string) {
    const selection = document.getSelection();

    if (
      selection.isCollapsed ||
      !this.wrapper.nativeElement.contains(selection.anchorNode) ||
      !this.wrapper.nativeElement.contains(selection.focusNode)
    ) {
      return;
    }

    if (['bold', 'italic'].includes(command)) {
      document.execCommand(command, false);
    }

    this.content = this.wrapper.nativeElement.innerHTML;
  }
}
