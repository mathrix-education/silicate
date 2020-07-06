import {Brick, Bricks, TypedValueProvider} from '@mathrix-education/silicate-core';
import {ImageBrickComponent} from '../bricks/image-brick/image-brick.component';
import {ListBrickComponent} from '../bricks/list-brick/list-brick.component';
import {TextBrickComponent} from '../bricks/text-brick/text-brick.component';
import {TitleBrickComponent} from '../bricks/title-brick/title-brick.component';
import {TableBrickComponent} from '../bricks/table-brick/table-brick.component';
import {Heading, TitleBrickAllowedHeadings} from '../silicate-essentials.tokens';
import {ColumnsBrickComponent} from '../bricks/columns-brick/columns-brick.component';

/**
 * Bricks
 */
export const TextBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'text',
    component: TextBrickComponent,
  }
};
export const ImageBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'image',
    component: ImageBrickComponent,
  }
};
export const ListBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'list',
    component: ListBrickComponent,
  }
};
export const TitleBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'title',
    component: TitleBrickComponent,
  }
};
export const TableBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'table',
    component: TableBrickComponent,
  }
};

export const ColumnsBrickProvider: TypedValueProvider<Brick> = {
  provide: Bricks,
  multi: true,
  useValue: {
    kind: 'columns',
    component: ColumnsBrickComponent,
  }
};

export const TitleBrickAllowedHeadingsProvider: TypedValueProvider<Heading[]> = {
  provide: TitleBrickAllowedHeadings,
  useValue: ['h2', 'h3']
};
