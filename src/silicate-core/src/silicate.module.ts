import {NgModule} from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';
import {componentDeclarations, entryComponentsDeclarations} from './silicate.common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import { VideoBrickComponent } from './bricks/video-brick/video-brick.component';
import {YTPlayerModule} from 'angular-youtube-player';
import { VideoTimestampPipe } from './pipes/video-timestamp.pipe';

@NgModule({
  entryComponents: [...entryComponentsDeclarations],
  declarations: [...componentDeclarations],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ContenteditableModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatListModule,
    DragDropModule,
    YTPlayerModule
  ],
  providers: [
    JsonPipe
  ],
  exports: [
    SilicateWrapperComponent,
    SilicateProxyComponent
  ]
})
export class SilicateModule {
}
