import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {NgModule, Provider} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SilicateCoreModule} from '@mathrix-education/silicate-core';
import {VideoBrickComponent} from './bricks/video-brick/video-brick.component';
import {VideoBrickAnchorComponent} from './components/video-brick-anchor/video-brick-anchor.component';
import {VimeoPlayerComponent} from './players/vimeo-player/vimeo-player.component';
import {YoutubePlayerComponent} from './players/youtube-player/youtube-player.component';
import {VideoBrickProvider} from './providers/bricks.providers';
import {SafePipeModule} from 'safe-pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


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
