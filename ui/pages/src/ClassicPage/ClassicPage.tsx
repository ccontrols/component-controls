import React, { FC } from 'react';
import {
  EditPage,
  Title,
  Subtitle,
  Story,
  Playground,
  Stories,
  Description,
  ComponentSource,
  PropsTable,
} from '@component-controls/blocks';

export const ClassicPage: FC = () => {
  return (
    <>
      <EditPage />
      <Title />
      <Subtitle />
      <Description />
      <ComponentSource id="." title="Component" />
      <Playground openTab="source" title=".">
        <Story id="." />
      </Playground>
      <PropsTable of="." title="Properties" />
      <Stories dark={true} />
    </>
  );
};
