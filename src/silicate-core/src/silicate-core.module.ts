import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
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
import {ContenteditableModule} from '@ng-stack/contenteditable';
import {ImageBrickComponent} from './bricks/image-brick/image-brick.component';
import {ListBrickComponent} from './bricks/list-brick/list-brick.component';
import {TextBrickComponent} from './bricks/text-brick/text-brick.component';
import {TitleBrickComponent} from './bricks/title-brick/title-brick.component';
import {SilicateEditableComponent} from './components/silicate-editable/silicate-editable.component';
import {SilicateProxyComponent} from './components/silicate-proxy/silicate-proxy.component';
import {SilicateToolbarComponent} from './components/silicate-toolbar/silicate-toolbar.component';
import {SilicateWrapperComponent} from './components/silicate-wrapper/silicate-wrapper.component';
import {ImageBrickDialogComponent} from './dialogs/image-dialog/image-brick-dialog.component';
import {LinkDialogComponent} from './dialogs/link-dialog/link-dialog.component';
import {UnsafeHtmlPipe} from './pipes/unsafe-html.pipe';
import {TextBrick, TextBrickFactory} from './declarations/bricks-factories/text-brick';
import {SilicateExtensionModule} from './silicate-extension.module';
import {brick} from './silicate-core.helpers';
import {ImageBrick, ImageBrickFactory} from './declarations/bricks-factories/image-brick';
import {ListBrick, ListBrickFactory} from './declarations/bricks-factories/list-brick';
import {TitleBrick, TitleBrickFactory} from './declarations/bricks-factories/title-brick';

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
    SilicateWrapperComponent,
    UnsafeHtmlPipe,
    SilicateEditableComponent,
    SilicateToolbarComponent,
    TitleBrickComponent,
    ListBrickComponent
  ],
  imports: [
    CommonModule,
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
  exports: [
    ContenteditableModule,
    SilicateWrapperComponent,
    SilicateEditableComponent
  ]
})
export class SilicateCoreModule extends SilicateExtensionModule {
  static bricks(): Provider[] {
    return [
      brick<TextBrick>('text', TextBrickComponent, TextBrickFactory, 'Texte', 'notes'),
      brick<ImageBrick>('image', ImageBrickComponent, ImageBrickFactory, 'Image', 'image'),
      brick<ListBrick>('list', ListBrickComponent, ListBrickFactory, 'Liste', 'format_list_bulleted'),
      brick<TitleBrick>('title', TitleBrickComponent, TitleBrickFactory, 'Titre', 'title')
    ];
  }

  static withBricks(modules: any[]): ModuleWithProviders {
    const bricksProviders = [];

    modules.forEach(m => {
      bricksProviders.push(...m.bricks());
    });

    return {
      ngModule: SilicateCoreModule,
      providers: bricksProviders
    };
  }
}
