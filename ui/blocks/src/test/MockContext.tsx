import React from 'react';
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
}) => {
  return (
    <BlockContext.Provider
      value={{
        currentId: storyId,
        mockStore: storyStore,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};
