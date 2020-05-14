import React, { FC } from 'react';
import {
  EditPage,
  Playground,
  PropsTable,
  Title,
  Subtitle,
  Story,
  Description,
} from '@component-controls/blocks';
import { AxeAllyBlock } from '@component-controls/axe-plugin';
export const TestingPage: FC = () => (
  <>
    <EditPage />
    <Title />
    <Subtitle />
    <Description />
    <Playground title=".">
      <Story id="." />
    </Playground>

    <PropsTable of="." title="Controls" visibility="controls" />
    <AxeAllyBlock title="A11y tests" />
  </>
);
