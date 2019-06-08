import {TextBrickComponent} from './bricks/text-brick/text-brick.component';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';
import {ImageBrickComponent} from './bricks/image-brick/image-brick.component';
import {TextBrickToolbarComponent} from './toolbars/text-brick-toolbar/text-brick-toolbar.component';
import {SilicateToolbarComponent} from './components/silicate-toolbar/silicate-toolbar.component';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import {SilicateDebugComponent} from './components/silicate-debug/silicate-debug.component';
import {LinkDialogComponent} from './dialogs/link-dialog/link-dialog.component';
import {UnsafeHtmlPipe} from './pipes/unsafe-html.pipe';
import {ImageBrickDialogComponent} from './dialogs/image-dialog/image-brick-dialog.component';
import {ElementRef} from '@angular/core';
import {VideoBrickComponent} from './bricks/video-brick/video-brick.component';
import {VideoTimestampPipe} from './pipes/video-timestamp.pipe';
import {VideoBrickAnchorComponent} from './bricks/video-brick/video-brick-anchor/video-brick-anchor.component';
import {VimeoPlayerComponent} from './bricks/video-brick/vimeo-player/vimeo-player.component';

export interface Link {
  elementRef: ElementRef<Element>;
  href: string;
  target: '_blank' | '_self';
}

export const entryComponentsDeclarations: any[] = [
  SilicateProxyComponent,
  // TextBrick
  TextBrickComponent,
  TextBrickToolbarComponent,
  // ImageBrick
  ImageBrickComponent,
  // VideoBrick
  VideoBrickComponent,
  VideoBrickAnchorComponent,
  // Dialog
  ImageBrickDialogComponent,
  LinkDialogComponent
];
export const componentDeclarations: any[] = [
  ...entryComponentsDeclarations,
  // Video
  VimeoPlayerComponent,
  // Components
  SilicateToolbarComponent,
  SilicateDebugComponent,
  SilicateWrapperComponent,
  // Pipes
  SafeHtmlPipe,
  UnsafeHtmlPipe,
  VideoTimestampPipe
];

