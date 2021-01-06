import React, { FC } from 'react';
import { TabConfiguration } from '@component-controls/core';
import { Description } from '@component-controls/blocks';
import { ImagesBlock, ImagesBlockProps } from '../ImagesBlock';

const ImagesPage: FC<ImagesBlockProps> = props => (
  <>
    <Description />
    <ImagesBlock {...props} />
  </>
);

export default {
  title: 'Images',
  component: ImagesPage,
  isVisible: ({ story }) => story.plugins?.images,
} as TabConfiguration;
