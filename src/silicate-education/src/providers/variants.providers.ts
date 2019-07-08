import {BlockBrickVariants, ContainerBrickVariants} from '../silicate-education.tokens';
import {BlockBrickVariantDeclarations} from '../bricks/block/block-brick.variant.declaration';
import {ContainerBrickVariantDeclarations} from '../bricks/container/container-brick.variant.declarations';

export const BlockBrickVariantsProvider = {
  provide: BlockBrickVariants,
  useValue: BlockBrickVariantDeclarations
};
export const ContainerBrickVariantsProvider = {
  provide: ContainerBrickVariants,
  useValue: ContainerBrickVariantDeclarations
};
