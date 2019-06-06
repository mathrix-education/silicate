import {Routes} from '@angular/router';
import {TextBrickComponent} from './bricks/text-brick/text-brick.component';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';
import {ImageBrickComponent} from './bricks/image-brick/image-brick.component';
import {TextBrickToolbarComponent} from './toolbars/text-brick-toolbar/text-brick-toolbar.component';
import {SilicateToolbarComponent} from './components/silicate-toolbar/silicate-toolbar.component';
import {ImageBrickDialogComponent} from './bricks/image-brick/image-brick-dialog.component';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import {SilicateDebugComponent} from './components/silicate-debug/silicate-debug.component';

export const entryComponentsDeclarations: any[] = [
  SilicateProxyComponent,
  // TextBrick
  TextBrickComponent,
  TextBrickToolbarComponent,
  // ImageBrick
  ImageBrickComponent,
  ImageBrickDialogComponent
];
export const componentDeclarations: any[] = [
  ...entryComponentsDeclarations,
  // Components
  SilicateToolbarComponent,
  SilicateDebugComponent,
  SilicateWrapperComponent,
  // Pipes
  SafeHtmlPipe
];

export const providerDeclarations: any[] = [];

export const routes: Routes = [];
