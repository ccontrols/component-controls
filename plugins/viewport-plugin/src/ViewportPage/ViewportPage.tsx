import React, { FC } from 'react';
import { TabConfiguration } from '@component-controls/core';
import { Description } from '@component-controls/blocks';
import { ViewportBlock, ViewportBlockProps } from '../ViewportBlock';

const ViewportPage: FC<ViewportBlockProps> = props => (
  <>
    <Description />
    <ViewportBlock
      title="Viewport"
      sxContainer={{ flexDirection: 'column' }}
      {...props}
    />
  </>
);

export default {
  title: 'Viewport',
  component: ViewportPage,
} as TabConfiguration;
