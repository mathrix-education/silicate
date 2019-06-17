import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {MatDialog} from '@angular/material';
import {first} from 'rxjs/operators';
import {LinkDialogComponent} from '../../dialogs/link-dialog/link-dialog.component';
import {ContainerService} from '../../services/container/container.service';
import {SelectionService} from '../../services/selection/selection.service';
import {SilicateService} from '../../services/silicate/silicate.service';
import {ToolbarService} from '../../services/toolbar/toolbar.service';
import {EditableFilter} from '../../silicate-core.types';



@Component({
  selector: 'mtx-silicate-editable',
  templateUrl: './silicate-editable.component.html',
  styleUrls: ['./silicate-editable.component.scss']
})
export class SilicateEditableComponent implements AfterViewInit, OnDestroy {
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

  /** Un-listen the wrapper focus event. */
  unlistenWrapperFocus: () => void;
  /** Un-listen the wrapper focus event. */
  unlistenWrapperBlur: () => void;
  /** Un-listen the document selectionchange event. */
  unlistenSelectionChange: () => void;


  constructor(
    private renderer2: Renderer2,
    public silicate: SilicateService,
    private container: ContainerService,
    public selection: SelectionService,
    private toolbar: ToolbarService,
    private dialog: MatDialog
  ) {
    const max = SilicateEditableComponent.MAX_ID;
    const min = SilicateEditableComponent.MIN_ID;
    const idInt = Math.floor(Math.random() * (max - min + 1)) + min;
    this.id = `silicate-editable-${idInt}`;
  }


  @Input()
  get content(): string {
    return this.model.content;
  }


  set content(newContent: string) {
    this.model.content = this.purify(newContent, []);
    this.contentChange.emit(this.content);
  }


  ngAfterViewInit(): void {
    if (this.placeholder) {
      this.renderer2.setAttribute(this.wrapper.nativeElement, 'placeholder', this.placeholder);
    }

    this.listenWrapperFocus();
    this.listenWrapperBlur();
  }


  ngOnDestroy(): void {
    this.unlistenWrapperFocus();
    this.unlistenWrapperBlur();
  }


  /**
   * Synchronise (replace) the current innerHTML to the content.
   */
  sync() {
    this.content = this.wrapper.nativeElement.innerHTML;
  }


  @HostListener('keydown', ['$event'])
  onKeydown($event: KeyboardEvent) {
    this.container.editableEvents
      .filter(kdc => kdc.key === $event.key)
      .forEach(kdc => kdc.callback(this));
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
        .pipe(first())
        .subscribe(() => this.sync());
    }
  }


  /**
   * Listen on the #wrapper focus event. Then, create an document-wide event listener to handle selection change and transmit the
   * event to the ToolbarService.
   */
  listenWrapperFocus() {
    this.unlistenWrapperFocus = this.renderer2.listen(this.wrapper.nativeElement, 'focus', () => {
      this.unlistenSelectionChange = this.renderer2.listen('document', 'selectionchange', () => {
        if (!this.silicate.editable) {
          return;
        }

        if (this.selection.isSelectionInside(this.wrapper.nativeElement)) {
          this.toolbar.show(this);
        } else {
          this.toolbar.hide(this);
        }
      });
    });
  }


  /**
   * Listen on the #wrapper blur event. Then, destroy the document-wide selection change.
   */
  listenWrapperBlur() {
    this.unlistenWrapperBlur = this.renderer2.listen(this.wrapper.nativeElement, 'blur', () => {
      this.toolbar.hide(this);
      this.unlistenSelectionChange();
    });
  }


  focus() {
    // TODO: place the caret at the end of the element
    this.wrapper.nativeElement.focus();
  }


  /**
   * Purify HTML using a custom rules set.
   * @param dirtyHTML The dirty HTML.
   * @param filters Array of Filers.
   *
   * Example of rules:
   * [
   *   {
   *     selector: 'p',
   *     allowedAttributes: ['class']
   *   }
   * ]
   *
   * Will only allow <p> tags and will only keep 'class' attribute on those <p> tags.
   * @see SilicateCoreFilters
   */
  purify(dirtyHTML: string, filters: EditableFilter[]) {
    const sandbox: HTMLDivElement = this.renderer2.createElement('div');
    this.renderer2.setProperty(sandbox, 'innerHTML', dirtyHTML);

    // First, we remove all elements which does not match with our selectors.
    const blacklistSelector = filters.map(rule => `:not(${rule.selector})`).join('');
    const blacklistedElements = sandbox.querySelectorAll(blacklistSelector);
    blacklistedElements.forEach((blacklistedElement) => {
      /**
       * outerHTML = innerHTML is equivalent to removing the HTML tag
       * Example: <p>test</p> => test
       */
      this.renderer2.setProperty(blacklistedElement, 'outerHTML', blacklistedElement.innerHTML);
    });


    // Then, we remove unwanted attributes (those which are not explicitly whitelisted in the rule set)
    filters.forEach(rule => {
      const nodes = sandbox.querySelectorAll(rule.selector);

      nodes.forEach((element: Element) => {
        /**
         * We need to convert element.attributes since it is not an implementation of Array.
         * @see https://www.w3schools.com/jsref/prop_node_attributes.asp
         * @see NamedNodeMap
         */
        const blacklistedAttributes = Array.from(element.attributes)
          .map(attribute => attribute.name)
          .filter(attributeName => !rule.allowedAttributes.includes(attributeName));
        blacklistedAttributes.forEach(blacklistedAttributeName => {
          element.removeAttribute(blacklistedAttributeName);
        });
      });
    });

    // Finally, we get the clean HTML and destroy the sandbox
    const cleanHTML = sandbox.innerHTML;
    this.renderer2.destroyNode(sandbox);

    return cleanHTML;
  }
}
