import {Component, ElementRef, ViewChild} from '@angular/core';
import {BaseBrickComponent} from '../base-brick/base-brick.component';
import {TextBrick} from './text-brick';
import {TextBrickToolbarComponent} from '../../toolbars/text-brick-toolbar/text-brick-toolbar.component';
import {DomHelpers} from '../../helpers/dom-helpers';
import {MatDialog} from '@angular/material';
import {LinkDialogComponent} from '../../dialogs/link-dialog/link-dialog.component';

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

  constructor(private dialog: MatDialog) {
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

  onClick($event) {
    if (!this.editable) {
      return;
    }

    const targetLink = $event.target.closest('a');

    if (targetLink !== null) {
      const link = {
        elementRef: new ElementRef(targetLink),
        href: targetLink.getAttribute('href'),
        target: targetLink.getAttribute('target')
      };

      this.dialog.open(LinkDialogComponent, {
        width: '400px',
        data: link
      });
    }
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
