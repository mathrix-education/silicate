import {Component, ElementRef, HostBinding, Inject, OnInit, Optional, Renderer2} from '@angular/core';
import {Toolbar} from '../../interfaces/toolbar';
import {SelectionService} from '../../services/selection/selection.service';
import {SilicateService} from '../../services/silicate/silicate.service';
import {ToolbarService} from '../../services/toolbar/toolbar.service';
import {Toolbars} from '../../silicate-core.tokens';


@Component({
  selector: 'silicate-toolbar',
  templateUrl: './silicate-toolbar.component.html',
  styleUrls: ['./silicate-toolbar.component.scss']
})
export class SilicateToolbarComponent implements OnInit {
  @HostBinding('style.visibility') visibility: string;
  @HostBinding('style.left.px') x: number;
  @HostBinding('style.top.px') y: number;


  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer2: Renderer2,
    public silicate: SilicateService,
    public toolbar: ToolbarService,
    private selection: SelectionService
  ) {
  }


  get width() {
    return this.elementRef.nativeElement.offsetWidth;
  }


  get height() {
    return this.elementRef.nativeElement.offsetHeight;
  }


  ngOnInit() {
    this.toolbar.show$.subscribe((s) => {
      if (s) {
        this.show();
      } else {
        this.hide();
      }
    });
  }


  hide() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'visibility', 'hidden');
  }


  show() {
    const rect = this.selection.getSelectionRectangle();
    let computedX = rect.left + (rect.width / 2) - (this.width / 2);
    const computedY = rect.top - this.height - 8;

    if (computedX < 8) {
      computedX = 8;
    }

    this.renderer2.setStyle(this.elementRef.nativeElement, 'visibility', 'visible');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'left', computedX + 'px');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'top', computedY + 'px');
  }
}
