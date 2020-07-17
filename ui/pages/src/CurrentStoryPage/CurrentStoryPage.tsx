import React, { FC } from 'react';
import {
  Story,
  Playground,
  Description,
  ComponentSource,
  PropsTable,
} from '@component-controls/blocks';

export const CurrentStoryPage: FC = () => (
  <>
    <Description />
    <ComponentSource id="." title="Component" />
    <Playground openTab="source" title=".">
      <Story id="." />
    </Playground>
    <PropsTable of="." title="Props" />
  </>
);
