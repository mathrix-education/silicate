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
  MatRippleModule,
  MatSelectModule
} from '@angular/material';
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {SilicateCoreModule} from '../../silicate-core/src/silicate-core.module';
import {VideoBrickAnchorComponent} from './components/video-brick-anchor/video-brick-anchor.component';
import {VideoBrickComponent} from './components/video-brick/video-brick.component';
import {VimeoPlayerComponent} from './players/vimeo-player/vimeo-player.component';
import {YoutubePlayerComponent} from './players/youtube-player/youtube-player.component';
import { NativePlayerComponent } from './players/native-player/native-player.component';

@NgModule({
  entryComponents: [
    VideoBrickComponent
  ],
  declarations: [
    VideoBrickComponent,
    VideoBrickAnchorComponent,
    VimeoPlayerComponent,
    YoutubePlayerComponent,
    NativePlayerComponent
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
    MatRippleModule,
    MatButtonModule,
    DragDropModule
  ],
  exports: [
    VideoBrickComponent,
    VideoBrickAnchorComponent,
    VimeoPlayerComponent,
    YoutubePlayerComponent
  ]
})
export class SilicateVideosModule {
}
