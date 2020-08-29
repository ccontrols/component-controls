/* eslint-disable react/display-name */
import React from 'react';
import {
  Playground,
  PropsTable,
  Story,
  Description,
} from '@component-controls/blocks';
import { getControlsCount } from '@component-controls/core';
import { useCurrentStory } from '@component-controls/store';
import { AllyBlock } from '@component-controls/axe-plugin';
import { ViewportBlock } from '@component-controls/viewport-plugin';
import { DocsContainer } from '@component-controls/storybook/DocsContainer';

const TestingPage = () => {
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
      <AllyBlock title="A11y tests" />
      <ViewportBlock title="Viewport"/>
    </>  
  );
}

export default {
  key: 'test',
  title: 'Testing',
  render: ({ active }) => {
    return (
      <DocsContainer active={active}>
        <TestingPage />
      </DocsContainer>
    );
  },
};
