import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
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

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[silicate]'
})
export class SilicateDirective implements OnInit, OnChanges, OnDestroy {
  @HostBinding('attr.contenteditable') contenteditable = false;

  @Output() output = new EventEmitter<any>();
  @Input() data: string;
  @Output() dataChange = new EventEmitter<string>();

  /** The subscription ti SilicateService.editable$ */
  private editableSubscription: Subscription;
  /** Un-listen the wrapper focus event. */
  unlistenWrapperFocus: () => void;
  /** Un-listen the wrapper focus event. */
  unlistenWrapperBlur: () => void;
  /** Un-listen provided on-focus events */
  unlistenFocusEvents: (() => void)[] = [];

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    private renderer2: Renderer2,
    public silicate: SilicateService,
    private toolbar: ToolbarService,
    private purifier: PurifierService,
    private injector: Injector
  ) {
  }


  ngOnInit(): void {
    this.contenteditable = this.silicate.editable;
    this.editableSubscription = this.silicate.editable$.subscribe((editable) => this.contenteditable = editable);
    this.listenWrapperFocus();
    this.listenWrapperBlur();
  }

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
   * Un-listen all declared event listener to cleanly delete the component.
   */
  ngOnDestroy(): void {
    this.editableSubscription.unsubscribe();
    this.unlistenWrapperFocus();
    this.unlistenWrapperBlur();
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

  @HostListener('input')
  onInput() {
    if (this.silicate.editable) {
      this.dataChange.emit(this.serialize());
    }
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
        .forEach((handler: Handler) => {
          const target = (!handler.target || handler.target === 'self') ? this.elementRef.nativeElement : handler.target;

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
}
