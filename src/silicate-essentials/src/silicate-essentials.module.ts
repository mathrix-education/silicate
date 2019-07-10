import {CommonModule} from '@angular/common';
import {NgModule, Provider} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule
} from '@angular/material';
import {SilicateCoreModule} from '@mathrix/silicate-core';
import {ImageBrickComponent} from './bricks/image-brick/image-brick.component';
import {ListBrickComponent} from './bricks/list-brick/list-brick.component';
import {TextBrickComponent} from './bricks/text-brick/text-brick.component';
import {TitleBrickComponent} from './bricks/title-brick/title-brick.component';
import {ImageDialogComponent} from './dialogs/image-dialog/image-dialog.component';
import {LinkDialogComponent} from './dialogs/link-dialog/link-dialog.component';
import {
  ImageBrickProvider,
  ListBrickProvider,
  TableBrickProvider,
  TextBrickProvider,
  TitleBrickAllowedHeadingsProvider,
  TitleBrickProvider
} from './providers/bricks.providers';
import {BoldFilterProvider, ItalicFilterProvider, LinkFilterProvider} from './providers/filters.providers';
import {OpenLinkDialogHandlerProvider} from './providers/handlers.providers';
import {BoldToolbarProvider, ItalicToolbarProvider, LinkToolbarProvider} from './providers/toolbars.providers';
import {TableBrickComponent} from './bricks/table-brick/table-brick.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    // Material
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    // Silicate
    SilicateCoreModule
  ],
  declarations: [
    ImageBrickComponent,
    ListBrickComponent,
    TextBrickComponent,
    TitleBrickComponent,
    ImageDialogComponent,
    LinkDialogComponent,
    TableBrickComponent
  ],
  entryComponents: [
    ImageBrickComponent,
    ListBrickComponent,
    TextBrickComponent,
    TitleBrickComponent,
    ImageDialogComponent,
    LinkDialogComponent,
    TableBrickComponent
  ]
})
export class SilicateEssentialsModule {
  static providers(): Provider[] {
    return [
      // Bricks
      TextBrickProvider,
      ImageBrickProvider,
      TitleBrickProvider,
      ListBrickProvider,
      TableBrickProvider,
      TitleBrickAllowedHeadingsProvider,
      // Handlers
      OpenLinkDialogHandlerProvider,
      // EditableFilters
      BoldFilterProvider,
      ItalicFilterProvider,
      LinkFilterProvider,
      // ToolbarActions
      BoldToolbarProvider,
      ItalicToolbarProvider,
      LinkToolbarProvider
    ];
  }
}
