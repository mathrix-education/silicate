import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {Handler} from '../../interfaces/handler';
import {PurifierService} from '../../services/purifier/purifier.service';
import {SilicateService} from '../../services/silicate/silicate.service';
import {ToolbarService} from '../../services/toolbar/toolbar.service';
import {Serializer} from '../../interfaces/serializer';


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
  @Output() output = new EventEmitter<{ eventName: string, event: any }>();

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
    const max = SilicateEditableComponent.MAX_ID;
    const min = SilicateEditableComponent.MIN_ID;
    const idInt = Math.floor(Math.random() * (max - min + 1)) + min;
    this.id = `silicate-editable-${idInt}`;
  }


  @Input()
  get content(): string {
    let buffer = this.model.content;

    this.silicate.serializers.forEach((serializer: Serializer) => {
      buffer = serializer.render(buffer);
    });

    return buffer;
  }


  set content(newContent: string) {
    let buffer = this.purifier.purify(newContent);

    this.silicate.serializers.forEach((serializer: Serializer) => {
      buffer = serializer.serialize(buffer);
    });

    this.model.content = buffer;
    this.contentChange.emit(this.model.content);
  }


  ngAfterViewInit(): void {
    if (this.placeholder) {
      this.renderer2.setAttribute(this.wrapper.nativeElement, 'placeholder', this.placeholder);
    }

    this.listenWrapperFocus();
    this.listenWrapperBlur();
  }


  /**
   * Un-listen all declared event listener to cleanly delete the component.
   */
  ngOnDestroy(): void {
    this.unlistenWrapperFocus();
    this.unlistenWrapperBlur();
  }


  /**
   * Synchronise (replace) the current innerHTML to the content.
   * This will trigger the sanitization by the PurifierService.
   */
  sync() {
    this.content = this.wrapper.nativeElement.innerHTML;
  }

  /**
   * Catch the enter key down.
   * @param $event The enter KeyboardEvent
   */
  @HostListener('keydown.enter', ['$event'])
  onEnter($event: KeyboardEvent) {
    $event.preventDefault();
    // For now, that's all
  }


  /**
   * Listen on the #wrapper focus event. Then, create an document-wide event listener to handle selection change and transmit the
   * event to the ToolbarService.
   */
  listenWrapperFocus() {
    this.unlistenWrapperFocus = this.renderer2.listen(this.wrapper.nativeElement, 'focus', () => {
      // (Re)Register on-focus events
      this.unlistenFocusEvents = [];
      this.silicate.handlers
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
