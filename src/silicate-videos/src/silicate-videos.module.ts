import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {NgModule, Provider} from '@angular/core';
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
import {VideoBrickComponent} from './bricks/video-brick/video-brick.component';
import {VideoBrickAnchorComponent} from './components/video-brick-anchor/video-brick-anchor.component';
import {VimeoPlayerComponent} from './players/vimeo-player/vimeo-player.component';
import {YoutubePlayerComponent} from './players/youtube-player/youtube-player.component';
import {VideoBrickProvider} from './providers/bricks.providers';


@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    // Angular Material
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    // Flex Layouts
    FlexLayoutModule,
    // Silicate
    SilicateCoreModule
  ],
  declarations: [
    VideoBrickComponent,
    VideoBrickAnchorComponent,
    VimeoPlayerComponent,
    YoutubePlayerComponent
  ],
  entryComponents: [
    VideoBrickComponent
  ]
})
export class SilicateVideosModule {
  static providers(): Provider[] {
    return [
      VideoBrickProvider
    ];
  }
}
