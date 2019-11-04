import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import {Serializer} from '../interfaces/serializer';
import {SilicateService} from '../services/silicate/silicate.service';
import {ToolbarService} from '../services/toolbar/toolbar.service';
import {PurifierService} from '../services/purifier/purifier.service';
import {Handler} from '../interfaces/handler';
import {Subscription} from 'rxjs';
import {DOCUMENT} from '@angular/common';

/** @dynamic */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[silicate]'
})
export class SilicateDirective implements OnInit, OnChanges, OnDestroy {
  @HostBinding('attr.contenteditable') contenteditable = false;

  @Input() data: string;
  @Output() dataChange = new EventEmitter<string>();

  /** The subscription ti SilicateService.editable$ */
  private editableSubscription: Subscription;
  /** Un-listen the wrapper focus event. */
  unlistenWrapperFocus: () => void;
  /** Un-listen the wrapper focus event. */
  unlistenWrapperBlur: () => void;
  /** Un-listen provided global events */
    // tslint:disable-next-line:variable-name
  unlistenGlobalEvents_: (() => void)[] = [];
  /** Un-listen provided on-focus events */
  unlistenFocusEvents: (() => void)[] = [];

  /** call this function to remove paste event listener */
  private unlistenPasteListener: () => void;

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    private renderer2: Renderer2,
    public silicate: SilicateService,
    private toolbar: ToolbarService,
    private purifier: PurifierService,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {
  }


  /**
   * On initialization:
   * 1. Synchronise the editable state withe the SilicateService, and subscribe to it;
   * 2. Register global events;
   * 3. Register on-focus events.
   */
  ngOnInit(): void {
    this.contenteditable = this.silicate.editable;

    this.editableSubscription = this.silicate.editable$.subscribe((editable) => {
      this.unlistenGlobalEvents();
      this.contenteditable = editable;
      this.listenGlobalEvents();
    });

    this.listenWrapperFocus();
    this.listenWrapperBlur();
    this.listenPasteEvent();
  }

  /**
   * On change, synchronise the data by re-rendering.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      const newSerializedData = changes.data.currentValue;
      const actualSerializedData = this.serialize();

      if (newSerializedData !== actualSerializedData) {
        this.render(newSerializedData);
      }
    }
  }

  /**
   * On destroy,  un-listen all declared event listener to cleanly delete the component.
   */
  ngOnDestroy(): void {
    if (this.editableSubscription instanceof Subscription) {
      this.editableSubscription.unsubscribe();
    }
    this.unlistenWrapperFocus();
    this.unlistenWrapperBlur();
    this.unlistenGlobalEvents();
    this.unlistenPasteListener();
  }

  /**
   * Serialize the innerHTML of the element to its JSON form.
   */
  serialize() {
    let buffer = this.elementRef.nativeElement.innerHTML;

    this.silicate.serializers.forEach((serializer: Serializer) => {
      buffer = serializer.serialize(buffer);
    });

    return buffer;
  }

  /**
   * Render a serialized HTML string into the element.
   * @param buffer The serialized HTML string.
   */
  render(buffer: string) {
    this.silicate.serializers.forEach((serializer: Serializer) => {
      buffer = serializer.render(buffer);
    });

    this.renderer2.setProperty(this.elementRef.nativeElement, 'innerHTML', buffer);
  }

  /**
   * On input, synchronise the view with the data.
   */
  @HostListener('input')
  onInput() {
    if (this.silicate.editable) {
      this.dataChange.emit(this.serialize());
    }
  }


  /**
   * Get the target of an event.
   */
  private getTarget(handler: Handler): HTMLElement | 'document' | 'window' {
    return (!handler.target || handler.target === 'self') ? this.elementRef.nativeElement : handler.target;
  }

  /**
   * Get the method of an event.
   */
  private getMethod(handler: Handler): string {
    return handler.method ? handler.method : 'invoke';
  }

  /**
   * Listen on the #wrapper focus event. Then, create an document-wide event listener to handle selection change and transmit the
   * event to the ToolbarService.
   */
  listenWrapperFocus() {
    this.unlistenWrapperFocus = this.renderer2.listen(this.elementRef.nativeElement, 'focus', () => {
      // (Re)Register on-focus events
      this.unlistenFocusEvents = [];
      this.silicate.handlers
        .filter(handler => handler.whenFocused && handler.whenEditable === this.silicate.editable)
        .forEach((handler: Handler) => {
          const target = this.getTarget(handler);

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
    this.unlistenWrapperBlur = this.renderer2.listen(this.elementRef.nativeElement, 'blur', () => {
      this.toolbar.hide(this);
      this.unlistenFocusEvents.forEach(e => e());

      if (this.silicate.editable) {
        this.dataChange.emit(this.serialize());
      }
    });
  }

  /**
   * Listen global events.
   */
  listenGlobalEvents() {
    this.silicate.handlers
      .filter(handler => !handler.whenFocused && handler.whenEditable === this.silicate.editable)
      .forEach(handler => {
        const unlistenGlobalEvent = this.renderer2.listen(this.getTarget(handler), handler.eventName, ($event) => {
          const service = this.injector.get(handler.service);
          const method = this.getMethod(handler);
          service[method]($event, this);
        });

        this.unlistenGlobalEvents_.push(unlistenGlobalEvent);
      });
  }

  /**
   * Unlisten global events.
   */
  unlistenGlobalEvents() {
    this.unlistenGlobalEvents_.forEach(e => e());
  }

  /**
   * Focus a the elementRef nativeElement.
   */
  focus() {
    this.elementRef.nativeElement.focus();
  }

  /**
   * Listen to paste event and paste only plain text
   */
  private listenPasteEvent() {
    this.unlistenPasteListener = this.renderer2.listen(this.elementRef.nativeElement, 'paste', (event) => {
      event.preventDefault();

      let plainText = (event.originalEvent || event).clipboardData.getData('text/plain');
      plainText = plainText.replace('\n', ' ');
      this.document.execCommand('insertHTML', false, plainText);
    });

  }
}
