import {InjectionToken} from '@angular/core';
import {ContainerBrickVariant} from './bricks/container/container-brick.variant';
import {BlockBrickVariant} from './bricks/block/block-brick.variant';

export const BlockBrickVariants = new InjectionToken<BlockBrickVariant[]>('BlockBrickVariant');
export const ContainerBrickVariants = new InjectionToken<ContainerBrickVariant[]>('ContainerBrickVariants');
