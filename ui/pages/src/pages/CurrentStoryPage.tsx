import React, { FC, Fragment } from 'react';
import { TabConfiguration } from '@component-controls/core';
import { Story, Playground, Description } from '@component-controls/blocks';

const CurrentStoryPage: FC = () => (
  <Fragment>
    <Description />
    <Playground openTab="source" title=".">
      <Story id="." />
    </Playground>
  </Fragment>
);

export default {
  title: 'Story',
  component: CurrentStoryPage,
} as TabConfiguration;
