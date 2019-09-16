import {BaseBrick} from '@mathrix-education/silicate-core';
import {Heading} from '../../silicate-essentials.tokens';


export interface TitleBrick extends BaseBrick {
  kind: 'title';
  heading: Heading;
  text: string;
}
