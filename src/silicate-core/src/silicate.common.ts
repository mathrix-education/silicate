import {Routes} from '@angular/router';
import {TextBrickComponent} from './bricks/text-brick/text-brick.component';
import {VideoBrickComponent} from './bricks/video-brick/video-brick.component';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';
import {ImageBrickComponent} from './bricks/image-brick/image-brick.component';
import {TextBrickToolbarComponent} from './toolbars/text-brick-toolbar/text-brick-toolbar.component';
import {SilicateToolbarComponent} from './components/silicate-toolbar/silicate-toolbar.component';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {ImageBrickDialogComponent} from './bricks/image-brick/image-brick-dialog.component';

export const entryComponentsDeclarations: any[] = [
  SilicateProxyComponent,
  // TextBrick
  TextBrickComponent,
  TextBrickToolbarComponent,
  // ImageBrick
  ImageBrickComponent,
  ImageBrickDialogComponent,
  // VideoBrick
  VideoBrickComponent
];
export const componentDeclarations: any[] = [
  ...entryComponentsDeclarations,
  // Components
  SilicateToolbarComponent,
  SilicateWrapperComponent
];

export const providerDeclarations: any[] = [];

export const routes: Routes = [];
