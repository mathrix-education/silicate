import {BaseBrick} from '../base-brick/base-brick';

export interface VideoBrick extends BaseBrick {
  kind: 'video';
  type: 'youtube' | 'vimeo';
  videoId: string;
  summary: {
    timestamp: number,
    title: string
  }[];
}
