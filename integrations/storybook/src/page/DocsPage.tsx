import React, { FC } from 'react';
import {
  ControlsTable,
  Title,
  Subtitle,
  Story,
  Playground,
  // Stories,
  Description,
  ComponentSource,
  PropsTable,
} from '@component-controls/blocks';

export const DocsPage: FC = () => {
  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <ComponentSource id="." title="Component" />
      <Playground openTab="source" title=".">
        <Story id="." />
      </Playground>
      <ControlsTable id="." />
      <PropsTable of="." />
      {/* <Stories dark={true} /> */}
    </>
  );
};
