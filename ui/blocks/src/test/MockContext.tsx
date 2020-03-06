import React from 'react';
import { BlockContext } from '../BlocksContext';

export interface MockContexProps {
  storyId?: string;
  component?: React.ComponentType;
}

export const MockContext: React.FC<MockContexProps> = ({
  children,
  storyId = 'blocks-core-description--simple',
  component = BlockContext,
}) => (
  <BlockContext.Provider
    value={{
      currentId: storyId,
      storyStore: {
        fromId: () => ({
          parameters: {
            component,
          },
        }),
      },
    }}
  >
    {children}
  </BlockContext.Provider>
);
