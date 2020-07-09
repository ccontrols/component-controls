import React, { FC } from 'react';
import {
  Subtitle,
  Story,
  Playground,
  Description,
  ComponentSource,
  PropsTable,
} from '@component-controls/blocks';

export const CurrentStoryPage: FC = () => (
  <>
    <Subtitle />
    <Description />
    <ComponentSource id="." title="Component" />
    <Playground openTab="source" title=".">
      <Story id="." />
    </Playground>
    <PropsTable of="." title="Props" />
  </>
);
