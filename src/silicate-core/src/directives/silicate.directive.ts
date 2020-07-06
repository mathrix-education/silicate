import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import {Renderer} from '../interfaces/renderer';
import {Renderers} from '../silicate-core.tokens';

/** @dynamic */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[silicate]'
})
export class SilicateDirective implements OnChanges {
  @Input() data: string;

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    private renderer2: Renderer2,
    @Optional() @Inject(Renderers) public renderers: Renderer[]
  ) {
  }

  /**
   * On change, synchronise the data by re-rendering.
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.render(this.data);
  }


  /**
   * Render the input through the different renderers.
   * @param input The input.
   */
  private renderThrough(input: string): string {
    return this.renderers.reduce((buffer: string, renderer: Renderer) => renderer.render(buffer), input);
  }

  /**
   * Render a serialized HTML string into the element.
   * @param buffer The serialized HTML string.
   */
  render(buffer: string): void {
    this.renderer2.setProperty(this.elementRef.nativeElement, 'innerHTML', this.renderThrough(buffer));
  }
}
