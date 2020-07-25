import React from 'react';
import { Store } from '@component-controls/store';
import { BlockContextProvider } from '../context';
import { store } from './storyStore';

export interface MockContexProps {
  storyId?: string;
  component?: React.ComponentType;
  [key: string]: any;
}

const storyStore = new Store(store);
export const MockContext: React.FC<MockContexProps> = ({
  children,
  storyId = 'id-of-story',
}) => {
  return (
    <BlockContextProvider storyId={storyId} store={storyStore}>
      {children}
    </BlockContextProvider>
  );
};
