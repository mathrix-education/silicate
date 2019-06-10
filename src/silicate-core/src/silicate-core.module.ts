import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule, JsonPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {ImageBrickComponent} from './bricks/image-brick/image-brick.component';
import {ListBrickComponent} from './bricks/list-brick/list-brick.component';
import {TextBrickComponent} from './bricks/text-brick/text-brick.component';
import {TitleBrickComponent} from './bricks/title-brick/title-brick.component';
import {SilicateDebugComponent} from './components/silicate-debug/silicate-debug.component';
import {SilicateEditableComponent} from './components/silicate-editable/silicate-editable.component';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {SilicateToolbarComponent} from './components/silicate-toolbar/silicate-toolbar.component';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';
import {ImageBrickDialogComponent} from './dialogs/image-dialog/image-brick-dialog.component';
import {LinkDialogComponent} from './dialogs/link-dialog/link-dialog.component';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import {UnsafeHtmlPipe} from './pipes/unsafe-html.pipe';
import {VideoTimestampPipe} from './pipes/video-timestamp.pipe';
import {SelectionService} from './services/selection/selection.service';

@NgModule({
  entryComponents: [
    // Bricks
    TextBrickComponent,
    TitleBrickComponent,
    ImageBrickComponent,
    ListBrickComponent,
    // Dialogs
    ImageBrickDialogComponent,
    LinkDialogComponent
  ],
  declarations: [
    SilicateProxyComponent,
    TextBrickComponent,
    ImageBrickComponent,
    ImageBrickDialogComponent,
    LinkDialogComponent,
    SilicateDebugComponent,
    SilicateWrapperComponent,
    SafeHtmlPipe,
    UnsafeHtmlPipe,
    VideoTimestampPipe,
    SilicateEditableComponent,
    SilicateToolbarComponent,
    TitleBrickComponent,
    ListBrickComponent,
  ],
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
    MatRippleModule,
    MatExpansionModule,
    DragDropModule
  ],
  providers: [
    SelectionService,
    JsonPipe
  ],
  exports: [
    SilicateWrapperComponent,
    SilicateEditableComponent
  ]
})
export class SilicateCoreModule {
  static bricks() {
    return [
      TextBrickComponent,
      TitleBrickComponent,
      ListBrickComponent,
      ImageBrickComponent
    ];
  }
}
