import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {SilicateLatexModule} from '@mathrix/silicate-latex';
import {SilicateVideosModule} from '@mathrix/silicate-videos';

import {LazyRoutingModule} from './lazy-routing.module';
import {LazyComponent} from './lazy.component';

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    SilicateCoreModule,
    SilicateLatexModule,
    SilicateVideosModule,
    LazyRoutingModule
  ]
})
export class LazyModule {
}
