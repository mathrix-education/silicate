import {BrickDeclaration, BrickDeclarations, TypedValueProvider} from '@mathrix/silicate-core';
import {ImageBrickComponent} from '../bricks/image-brick/image-brick.component';
import {ImageBrickFactory} from '../bricks/image-brick/image-brick.factory';
import {ListBrickComponent} from '../bricks/list-brick/list-brick.component';
import {ListBrickFactory} from '../bricks/list-brick/list-brick.factory';
import {TextBrickComponent} from '../bricks/text-brick/text-brick.component';
import {TextBrickFactory} from '../bricks/text-brick/text-brick.factory';
import {TitleBrickComponent} from '../bricks/title-brick/title-brick.component';
import {TitleBrickFactory} from '../bricks/title-brick/title-brick.factory';

/**
 * Bricks
 */
export const TextBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'text',
    icon: 'notes',
    name: 'Texte',
    component: TextBrickComponent,
    factory: TextBrickFactory
  }
};
export const ImageBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'image',
    icon: 'image',
    name: 'Image',
    component: ImageBrickComponent,
    factory: ImageBrickFactory
  }
};
export const ListBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'list',
    icon: 'format_list_bulleted',
    name: 'Liste',
    component: ListBrickComponent,
    factory: ListBrickFactory
  }
};
export const TitleBrickProvider: TypedValueProvider<BrickDeclaration> = {
  provide: BrickDeclarations,
  multi: true,
  useValue: {
    kind: 'title',
    icon: 'title',
    name: 'Titre',
    component: TitleBrickComponent,
    factory: TitleBrickFactory
  }
};
