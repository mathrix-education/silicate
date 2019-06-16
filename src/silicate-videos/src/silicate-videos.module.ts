import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {VideoBrickAnchorComponent} from './components/video-brick-anchor/video-brick-anchor.component';
import {VideoBrickComponent} from './components/video-brick/video-brick.component';
import {VimeoPlayerComponent} from './players/vimeo-player/vimeo-player.component';
import {YoutubePlayerComponent} from './players/youtube-player/youtube-player.component';


@NgModule({
  entryComponents: [
    VideoBrickComponent
  ],
  declarations: [
    VideoBrickComponent,
    VideoBrickAnchorComponent,
    VimeoPlayerComponent,
    YoutubePlayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ContenteditableModule,
    SilicateCoreModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule
  ],
  exports: [VideoBrickComponent]
})
export class SilicateVideosModule {
  static bricks() {
    return [VideoBrickComponent];
  }
}
