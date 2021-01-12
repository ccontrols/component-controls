import React, { FC } from 'react';
import { TabConfiguration } from '@component-controls/core';
import { Description } from '@component-controls/blocks';
import { FigmaBlock, FigmaBlockProps } from '../FigmaBlock';

const FigmaPage: FC<FigmaBlockProps> = props => (
  <>
    <Description />
    <FigmaBlock {...props} />
  </>
);

export default {
  title: 'Figma',
  component: FigmaPage,
  isVisible: ({ config, story }) =>
    config.tokens?.figmaAccessToken && story.plugins?.figma,
} as TabConfiguration;
