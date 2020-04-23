import React, { FC } from 'react';
import {
  Title,
  Subtitle,
  Story,
  Playground,
  Description,
  ComponentSource,
  PropsTable,
} from '@component-controls/blocks';

export const CurrentStoryPage: FC = () => {
  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <ComponentSource id="." title="Component" />
      <Playground openTab="source" title=".">
        <Story id="." />
      </Playground>
      <PropsTable of="." title="Props" />
    </>
  );
};
