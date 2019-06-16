import {Component, ElementRef, HostBinding, OnInit} from '@angular/core';
import {SelectionService} from '../../services/selection/selection.service';
import {ToolbarService} from '../../services/toolbar/toolbar.service';


@Component({
  selector: 'mtx-silicate-toolbar',
  templateUrl: './silicate-toolbar.component.html',
  styleUrls: ['./silicate-toolbar.component.scss']
})
export class SilicateToolbarComponent implements OnInit {
  @HostBinding('style.visibility') visibility: string;
  @HostBinding('style.left.px') x: number;
  @HostBinding('style.top.px') y: number;


  constructor(
    public toolbar: ToolbarService,
    private selection: SelectionService,
    private elementRef: ElementRef<HTMLElement>
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
    this.visibility = 'hidden';
  }


  show() {
    this.visibility = 'visible';

    const rect = this.selection.getSelectionRectangle();
    let computedX = rect.left + (rect.width / 2) - (this.width / 2);
    const computedY = rect.top - this.height - 8;

    if (computedX < 8) {
      computedX = 8;
    }

    this.x = computedX;
    this.y = computedY;
  }
}
