import React, { FC } from 'react';
import {
  Playground,
  PropsTable,
  Story,
  Description,
} from '@component-controls/blocks';
import { getControlsCount } from '@component-controls/core';
import { useCurrentStory } from '@component-controls/store';

import { AxeAllyBlock } from '@component-controls/axe-plugin';
export const TestingPage: FC = () => {
  const story = useCurrentStory();
  const controlsCount = getControlsCount(story?.controls);
  return (
    <>
      <Description />
      {controlsCount > 0 && (
        <>
          <Playground title=".">
            <Story id="." />
          </Playground>

          <PropsTable of="." title="Controls" visibility="controls" />
        </>
      )}
      <AxeAllyBlock title="A11y tests" />
    </>
  );
};
