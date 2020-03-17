import React from 'react';
import { BlockContext } from '../BlocksContext';
import { storyStore } from './storyStore';

export interface MockContexProps {
  storyId?: string;
  component?: React.ComponentType;
}

export const MockContext: React.FC<MockContexProps> = ({
  children,
  storyId = 'story',
}) => (
  <BlockContext.Provider
    value={{
      currentId: storyId,
      mockStore: storyStore as any,
    }}
  >
    {children}
  </BlockContext.Provider>
);
