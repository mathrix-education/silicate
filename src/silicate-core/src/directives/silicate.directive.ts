import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

/** @dynamic */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[silicate]'
})
export class SilicateDirective implements OnInit {

  @Input() data: string;

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    private renderer2: Renderer2,
  ) {
  }

  ngOnInit() {
    this.render(this.data);
  }


  private renderThrough(input: string): string {
    return;
    // return this.silicate.serializers.reduce((buffer: string, serializer: Serializer) => serializer.render(buffer), input);
  }

  /**
   * Render a serialized HTML string into the element.
   * @param buffer The serialized HTML string.
   */
  render(buffer: string): void {
    // this.renderer2.setProperty(this.elementRef.nativeElement, 'innerHTML', this.renderThrough(buffer));
    // TODO
  }
}
