import {Injectable} from '@angular/core';
import {BaseBrick, BaseBrickFactory} from '@mathrix/silicate-core';


export interface TitleBrick extends BaseBrick {
  kind: 'title';
  content: string;
}
