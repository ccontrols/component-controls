import React, { FC } from 'react';
import { TabConfiguration } from '@component-controls/core';
import { Description } from '@component-controls/blocks';
import { FigmaEmbedBlock, FigmaEmbedBlockProps } from '../FigmaEmbedBlock';

const FigmaEmbedPage: FC<FigmaEmbedBlockProps> = props => (
  <>
    <Description />
    <FigmaEmbedBlock {...props} />
  </>
);

export default {
  title: 'Figma',
  component: FigmaEmbedPage,
  isVisible: ({ story }) => story.plugins?.figma,
} as TabConfiguration;
