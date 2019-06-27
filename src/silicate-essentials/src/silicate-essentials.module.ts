import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import {
  BrickDeclarations,
  EditableEvents,
  EditableFilters,
  SilicateCoreModule,
  ToolbarActions
} from '@mathrix/silicate-core';
import {ImageBrickComponent} from './bricks/image-brick/image-brick.component';
import {ImageBrickFactory} from './bricks/image-brick/image-brick.factory';
import {ListBrickComponent} from './bricks/list-brick/list-brick.component';
import {ListBrickFactory} from './bricks/list-brick/list-brick.factory';
import {TextBrickComponent} from './bricks/text-brick/text-brick.component';
import {TextBrickFactory} from './bricks/text-brick/text-brick.factory';
import {TitleBrickFactory} from './bricks/title-brick/title-brick';
import {TitleBrickComponent} from './bricks/title-brick/title-brick.component';
import {ImageDialogComponent} from './dialogs/image-dialog/image-dialog.component';
import {LinkDialogComponent} from './dialogs/link-dialog/link-dialog.component';
import {OpenLinkDialog} from './editable-events/open-link-dialog';
import {BoldFilter} from './editable-filters/bold-filter';
import {ItalicFilter} from './editable-filters/italic-filter';
import {LinkFilter} from './editable-filters/link-filter';
import {BoldToolbarAction} from './toolbar-actions/bold.toolbar-action';
import {ItalicToolbarAction} from './toolbar-actions/italic.toolbar-action';
import {LinkToolbarAction} from './toolbar-actions/link.toolbar-action';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    SilicateCoreModule.withBricks([
      // Bricks
      {
        provide: BrickDeclarations,
        multi: true,
        useValue: {
          kind: 'text',
          icon: 'notes',
          name: 'Texte',
          component: TextBrickComponent,
          factory: TextBrickFactory
        }
      },
      {
        provide: BrickDeclarations,
        multi: true,
        useValue: {
          kind: 'image',
          icon: 'image',
          name: 'Image',
          component: ImageBrickComponent,
          factory: ImageBrickFactory
        }
      },
      {
        provide: BrickDeclarations,
        multi: true,
        useValue: {
          kind: 'list',
          icon: 'format_list_bulleted',
          name: 'Liste',
          component: ListBrickComponent,
          factory: ListBrickFactory
        }
      },
      {
        provide: BrickDeclarations,
        multi: true,
        useValue: {
          kind: 'title',
          icon: 'title',
          name: 'Titre',
          component: TitleBrickComponent,
          factory: TitleBrickFactory
        }
      },

      // Editable Events
      {provide: EditableEvents, multi: true, useValue: OpenLinkDialog},

      // Editable Filters
      {provide: EditableFilters, multi: true, useValue: BoldFilter},
      {provide: EditableFilters, multi: true, useValue: ItalicFilter},
      {provide: EditableFilters, multi: true, useValue: LinkFilter},

      // Toolbar Actions
      {provide: ToolbarActions, multi: true, useValue: BoldToolbarAction},
      {provide: ToolbarActions, multi: true, useValue: ItalicToolbarAction},
      {provide: ToolbarActions, multi: true, useValue: LinkToolbarAction}
    ])
  ],
  declarations: [
    ImageBrickComponent,
    ListBrickComponent,
    TextBrickComponent,
    TitleBrickComponent,
    ImageDialogComponent,
    LinkDialogComponent
  ],
  entryComponents: [
    ImageBrickComponent,
    ListBrickComponent,
    TextBrickComponent,
    TitleBrickComponent,
    ImageDialogComponent,
    LinkDialogComponent
  ],
  exports: [
    SilicateCoreModule,
    ImageBrickComponent,
    ListBrickComponent,
    TextBrickComponent,
    TitleBrickComponent,
    ImageDialogComponent,
    LinkDialogComponent
  ]
})
export class SilicateEssentialsModule {
}
