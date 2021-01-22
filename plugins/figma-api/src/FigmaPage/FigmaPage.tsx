import React, { FC } from 'react';
import { TabConfiguration } from '@component-controls/core';
import { Description, Playground, Story } from '@component-controls/blocks';
import {
  FigmaThumbnailBlock,
  FigmaThumbnailBlockProps,
} from '../FigmaThumbnailBlock';

import { FigmaComponentBlock } from '../FigmaComponentBlock';

const FigmaPage: FC<FigmaThumbnailBlockProps> = props => (
  <>
    <Description />
    <Playground title=".">
      <Story id="." />
    </Playground>
    <FigmaComponentBlock {...props} title="Component" />
    <FigmaThumbnailBlock {...props} title="Thumbnail" />
  </>
);

export default {
  title: 'Figma',
  component: FigmaPage,
  isVisible: ({ config, story }) =>
    config.tokens?.figmaAccessToken && story.plugins?.figma,
} as TabConfiguration;
