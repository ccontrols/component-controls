import React from 'react';
import { mergeControlValues } from '@component-controls/core';
import { BlockContext } from '../context';
import { storyStore } from './storyStore';

export interface MockContexProps {
  storyId?: string;
  component?: React.ComponentType;
  [key: string]: any;
}

export const MockContext: React.FC<MockContexProps> = ({
  children,
  storyId = 'story',
  ...rest
}) => {
  const story = storyStore.stories[storyId];
  const [controls, setControls] = React.useState(story.controls);
  return (
    <BlockContext.Provider
      value={{
        currentId: storyId,
        setControlValue: (storyId, name, value) => {
          if (controls) {
            setControls(mergeControlValues(controls, name, value));
          }
        },
        mockStore: {
          ...(storyStore as any),
          stories: {
            ...storyStore.stories,
            [storyId]: {
              ...(storyStore.stories[storyId] || {}),
              controls,
              ...rest,
            },
          },
        },
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};
