import {Component, ComponentFactoryResolver, ComponentRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'mtx-silicate-toolbar',
  templateUrl: './silicate-toolbar.component.html',
  styleUrls: ['./silicate-toolbar.component.scss']
})
export class SilicateToolbarComponent implements OnInit, OnChanges {
  @Input() toolbarComponent = null;
  @ViewChild('toolbar', {static: true}) toolbar;
  toolbarRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.setToolbar();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  setToolbar() {
    if (this.toolbarComponent !== null) {
      this.toolbar.clear();
      const toolbarFactory = this.componentFactoryResolver.resolveComponentFactory(this.toolbarComponent);
      this.toolbarRef = this.toolbar.createComponent(toolbarFactory);
    }
  }
}
