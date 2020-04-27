import {Brick, Bricks, TypedValueProvider} from '@mathrix-education/silicate-core';
import {ImageBrickComponent} from '../bricks/image-brick/image-brick.component';
import {ImageBrickFactory} from '../bricks/image-brick/image-brick.factory';
import {ListBrickComponent} from '../bricks/list-brick/list-brick.component';
import {ListBrickFactory} from '../bricks/list-brick/list-brick.factory';
import {TextBrickComponent} from '../bricks/text-brick/text-brick.component';
import {TextBrickFactory} from '../bricks/text-brick/text-brick.factory';
import {TitleBrickComponent} from '../bricks/title-brick/title-brick.component';
import {TitleBrickFactory} from '../bricks/title-brick/title-brick.factory';
import {TableBrickComponent} from '../bricks/table-brick/table-brick.component';
import {TableBrickFactory} from '../bricks/table-brick/table-brick.factory';
import {Heading, TitleBrickAllowedHeadings} from '../silicate-essentials.tokens';
import {ColumnsBrickComponent} from '../bricks/columns-brick/columns-brick.component';
import {ColumnsBrickFactory} from '../bricks/columns-brick/columns-brick.factory';

/**
 * Bricks
 */
export const TextBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'text',
    icon: 'notes',
    name: 'Texte',
    component: TextBrickComponent,
    factory: TextBrickFactory
  }
};
export const ImageBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'image',
    icon: 'image',
    name: 'Image',
    component: ImageBrickComponent,
    factory: ImageBrickFactory
  }
};
export const ListBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'list',
    icon: 'format_list_bulleted',
    name: 'Liste',
    component: ListBrickComponent,
    factory: ListBrickFactory
  }
};
export const TitleBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'title',
    icon: 'title',
    name: 'Titre',
    component: TitleBrickComponent,
    factory: TitleBrickFactory
  }
};
export const TableBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'table',
    icon: 'grid_on',
    name: 'Tableau',
    component: TableBrickComponent,
    factory: TableBrickFactory
  }
};

export const ColumnsBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'columns',
    icon: 'view_column',
    name: 'Colonnes',
    component: ColumnsBrickComponent,
    factory: ColumnsBrickFactory
  }
};

export const TitleBrickAllowedHeadingsProvider: TypedValueProvider<Heading[]> = {
  provide: TitleBrickAllowedHeadings,
  useValue: ['h2', 'h3']
};
