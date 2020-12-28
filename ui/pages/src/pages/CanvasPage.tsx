import React, { FC } from 'react';
import { TabConfiguration } from '@component-controls/core';
import { Story } from '@component-controls/blocks';

const CanvasPage: FC = () => <Story id="." plain />;

export default {
  title: 'Canvas',
  component: CanvasPage,
} as TabConfiguration;
