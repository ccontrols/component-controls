import React, { FC } from 'react';
import {
  EditPage,
  PropsTable,
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
      <PropsTable of="." title="Controls" visibility="controls" />
    </>
  );
};
