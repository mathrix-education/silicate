import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Injector,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {Handler} from '../../interfaces/handler';
import {PurifierService} from '../../services/purifier/purifier.service';
import {SelectionService} from '../../services/selection/selection.service';
import {SilicateService} from '../../services/silicate/silicate.service';
import {ToolbarService} from '../../services/toolbar/toolbar.service';


@Component({
  selector: 'silicate-editable',
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

  /**
   * We need a wrapper, since we cannot directly bind a directive on the host of our component.
   */
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
  /** Un-listen provided global events */
  unlistenGlobalEvents: (() => void)[] = [];
  /** Un-listen provided on-focus events */
  unlistenFocusEvents: (() => void)[] = [];


  constructor(
    private renderer2: Renderer2,
    public silicate: SilicateService,
    public selection: SelectionService,
    private toolbar: ToolbarService,
    private purifier: PurifierService,
    private injector: Injector
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
    this.model.content = this.purifier.purify(newContent);
    this.contentChange.emit(this.content);
  }


  ngAfterViewInit(): void {
    if (this.placeholder) {
      this.renderer2.setAttribute(this.wrapper.nativeElement, 'placeholder', this.placeholder);
    }


    this.silicate.handlers
      .filter(e => !e.focusOnly) // We only want the global events
      .forEach((handler: Handler) => {
        const target = (!handler.target || handler.target === 'self') ? this.wrapper.nativeElement : handler.target;

        const unlisten = this.renderer2.listen(target, handler.eventName, ($event) => {
          const service = this.injector.get(handler.service);
          service[handler.method]($event);
        });

        this.unlistenGlobalEvents.push(unlisten);
      });

    this.listenWrapperFocus();
    this.listenWrapperBlur();
  }


  /**
   * Un-listen all declared event listener to cleanly delete the component.
   */
  ngOnDestroy(): void {
    this.unlistenWrapperFocus();
    this.unlistenWrapperBlur();
    this.unlistenGlobalEvents.forEach(e => e());
  }


  /**
   * Synchronise (replace) the current innerHTML to the content.
   * This will trigger the sanitization by the PurifierService.
   */
  sync() {
    this.content = this.wrapper.nativeElement.innerHTML;
  }


  /**
   * Listen on the #wrapper focus event. Then, create an document-wide event listener to handle selection change and transmit the
   * event to the ToolbarService.
   */
  listenWrapperFocus() {
    this.unlistenWrapperFocus = this.renderer2.listen(this.wrapper.nativeElement, 'focus', () => {
      // Listen for selectionchange, to display the Toolbar
      this.unlistenSelectionChange = this.renderer2.listen('document', 'selectionchange', () => {
        if (!this.silicate.editable) {
          return;
        }

        if (!this.selection.isSelectionCollapsed() && this.selection.isSelectionInside(this.wrapper)) {
          this.toolbar.show(this);
        } else {
          this.toolbar.hide(this);
        }
      });

      // (Re)Register on-focus events
      this.unlistenFocusEvents = [];
      this.silicate.handlers
        .filter(e => e.focusOnly)
        .forEach((handler: Handler) => {
          const target = (!handler.target || handler.target === 'self') ? this.wrapper.nativeElement : handler.target;

          const unlistenFocusEvent = this.renderer2.listen(target, handler.eventName, ($event) => {
            const service = this.injector.get(handler.service);
            const method = handler.method ? handler.method : 'invoke';
            service[method]($event, this);
          });

          this.unlistenFocusEvents.push(unlistenFocusEvent);
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

      this.unlistenFocusEvents.forEach(e => e());
    });
  }


  /**
   * Focus the wrapper.
   * TODO: place the caret at the end of the element
   */
  focus() {
    this.wrapper.nativeElement.focus();
  }
}
