import React, { FC } from 'react';
import { Description } from '@component-controls/blocks';
import { ViewportBlock, ViewportBlockProps } from '../ViewportBlock';

export const ViewportPage: FC<ViewportBlockProps> = props => (
  <>
    <Description />
    <ViewportBlock title="Viewport" {...props} />
  </>
);
