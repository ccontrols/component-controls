import React from 'react';
import { BlockContext } from '../context';
import { storyStore } from './storyStore';
import { Story } from '@component-controls/specification';

export interface MockContexProps {
  storyId?: string;
  component?: React.ComponentType;
  [key: string]: any;
}

export const MockContext: React.FC<MockContexProps> = ({
  children,
  storyId = 'story',
  ...rest
}) => (
  <BlockContext.Provider
    value={{
      currentId: storyId,
      mockStore: {
        ...(storyStore as any),
        stories: {
          ...storyStore.stories,
          [storyId]: { ...(storyStore.stories[storyId] || {}), ...rest },
        },
      },
    }}
  >
    {children}
  </BlockContext.Provider>
);
