import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LinkDialogComponent} from '../../dialogs/link-dialog/link-dialog.component';
import {SelectionService} from '../../services/selection/selection.service';
import {SilicateService} from '../../services/silicate/silicate.service';
import {ToolbarService} from '../../services/toolbar/toolbar.service';

@Component({
  selector: 'mtx-silicate-editable',
  templateUrl: './silicate-editable.component.html',
  styleUrls: ['./silicate-editable.component.scss'],
})
export class SilicateEditableComponent implements AfterViewInit {
  private static readonly MAX_ID = 999999;
  private static readonly MIN_ID = 100000;

  @Input() placeholder: string;
  @Output() contentChange = new EventEmitter<string>();
  @Output() enter = new EventEmitter<KeyboardEvent>();
  @Output() delete = new EventEmitter<KeyboardEvent>();

  @HostBinding('id') id: string;

  @ViewChild('wrapper', {static: false}) wrapper: ElementRef<HTMLDivElement>;

  model = {
    content: null
  };

  constructor(
    private renderer2: Renderer2,
    public silicate: SilicateService,
    public selection: SelectionService,
    private toolbar: ToolbarService,
    private dialog: MatDialog
  ) {
    const max = SilicateEditableComponent.MAX_ID;
    const min = SilicateEditableComponent.MIN_ID;
    const idInt = Math.floor(Math.random() * (max - min + 1)) + min;
    this.id = `silicate-editable-${idInt}`;
  }

  private hasValidSelection() {
    return this.selection.isSelectionInside(this.wrapper.nativeElement)
      && !this.selection.isSelectionCollapsed();
  }

  @Input()
  get content(): string {
    return this.model.content;
  }

  set content(newContent: string) {
    this.model.content = this.sanitize(newContent, '<i><b><a>');
    this.contentChange.emit(this.content);
  }

  refresh() {
    this.content = this.wrapper.nativeElement.innerHTML;
  }

  @HostListener('focus')
  onFocus() {
    this.silicate.editableComponent = this;
  }

  @HostListener('keydown.enter', ['$event'])
  onEnter($event: KeyboardEvent) {
    this.enter.emit($event);
  }

  @HostListener('keydown.backspace', ['$event'])
  onKeydown($event: KeyboardEvent) {
    if (this.content === null || this.content.length === 0) {
      this.delete.emit($event);
    }
  }

  @HostListener('document:selectionchange', ['$event'])
  @HostListener('window:scroll', ['$event'])
  onSelection($event: Event) {
    if (!this.silicate.editable) {
      return;
    }

    if (this.hasValidSelection()) {
      this.toolbar.show(this);
    } else {
      this.toolbar.hide(this);
    }
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    if (!this.silicate.editable) {
      return;
    }

    const targetLink = $event.target.closest('a');
    if (targetLink !== null) {
      const link = {
        elementRef: new ElementRef(targetLink),
        href: targetLink.getAttribute('href'),
        target: targetLink.getAttribute('target')
      };

      this.dialog
        .open(LinkDialogComponent, {
          width: '400px',
          data: link
        })
        .afterClosed()
        .subscribe(() => this.refresh());
    }
  }

  ngAfterViewInit(): void {
    if (this.placeholder) {
      this.renderer2.setAttribute(this.wrapper.nativeElement, 'placeholder', this.placeholder);
    }
  }

  focus() {
    // TODO: place the caret at the end of the element
    this.wrapper.nativeElement.focus();
  }

  /**
   * Sanitize HTML
   */
  sanitize(rawHtml: string, allowedTags: string) {
    allowedTags = (((allowedTags || '') + '')
      .toLowerCase()
      .match(/<[a-z][a-z0-9]*>/g) || [])
      .join('');

    const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    const comments = /<!--[\s\S]*?-->/gi;

    return rawHtml.replace(comments, '')
      .replace(tags, ($0, $1) => allowedTags.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '')
      .replace(/&nbsp;/g, ' ')
      .trim();
  }
}
