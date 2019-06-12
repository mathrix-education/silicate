import {BaseBrick} from '@mathrix/silicate-core';

export interface VideoBrick extends BaseBrick {
  kind: 'video';
  type: 'youtube' | 'vimeo';
  videoId: string;
  summary: {
    timestamp: number,
    title: string
  }[];
}
