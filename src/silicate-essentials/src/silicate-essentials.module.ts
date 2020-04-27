import {CommonModule} from '@angular/common';
import {NgModule, Provider} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SilicateCoreModule} from '@mathrix-education/silicate-core';
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
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {ColumnsBrickComponent} from './bricks/columns-brick/columns-brick.component';
import {ColumnsBrickProvider} from './bricks/columns-brick/columns-brick.provider';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    ColumnsBrickComponent,
    ImageBrickComponent,
    ListBrickComponent,
    TextBrickComponent,
    TitleBrickComponent,
    ImageDialogComponent,
    LinkDialogComponent,
    TableBrickComponent,
  ],
  entryComponents: [
    ColumnsBrickComponent,
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
      ColumnsBrickProvider,
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
