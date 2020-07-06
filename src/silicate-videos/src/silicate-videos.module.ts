import {CommonModule} from '@angular/common';
import {NgModule, Provider} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SilicateCoreModule} from '@mathrix-education/silicate-core';
import {VideoBrickComponent} from './bricks/video-brick/video-brick.component';
import {VideoBrickAnchorComponent} from './components/video-brick-anchor/video-brick-anchor.component';
import {VimeoPlayerComponent} from './players/vimeo-player/vimeo-player.component';
import {YoutubePlayerComponent} from './players/youtube-player/youtube-player.component';
import {SafePipeModule} from 'safe-pipe';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {VideoBrickProvider} from './providers/bricks.providers';


@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    // Angular Material
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    SafePipeModule,
    // Silicate
    SilicateCoreModule
  ],
  declarations: [
    VideoBrickComponent,
    VideoBrickAnchorComponent,
    VimeoPlayerComponent,
    YoutubePlayerComponent
  ],
})
export class SilicateVideosModule {
  static providers(): Provider[] {
    return [
      VideoBrickProvider
    ];
  }
}
