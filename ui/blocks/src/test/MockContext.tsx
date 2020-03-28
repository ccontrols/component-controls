import React from 'react';
import { BlockContextProvider } from '../context';
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
    <BlockContextProvider currentId={storyId} mockStore={storyStore}>
      {children}
    </BlockContextProvider>
  );
};
