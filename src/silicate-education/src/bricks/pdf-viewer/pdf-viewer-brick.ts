import {BaseBrick} from '@mathrix-education/silicate-core';

export interface PDFViewerBrick extends BaseBrick {
  kind: 'pdf-viewer';
  url: string;
  state: {
    viewerOpen: boolean;
  }
}
