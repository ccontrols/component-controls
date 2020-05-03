import React, { FC } from 'react';
import {
  EditPage,
  ControlsTable,
  Title,
  Subtitle,
  Story,
  Description,
} from '@component-controls/blocks';

export const TestingPage: FC = () => {
  return (
    <>
      <EditPage />
      <Title />
      <Subtitle />
      <Description />
      <Story id="." />
      <ControlsTable />
    </>
  );
};
