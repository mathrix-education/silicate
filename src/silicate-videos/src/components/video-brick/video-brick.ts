import {BaseBrick} from '../../../../silicate-core/src/bricks/base-brick/base-brick';

export interface VideoBrick extends BaseBrick {
  kind: 'video';
  type: 'youtube' | 'vimeo';
  videoId: string;
  summary: {
    timestamp: number,
    title: string
  }[];
}
