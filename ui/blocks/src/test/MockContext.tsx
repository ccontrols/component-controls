import React from 'react';
import { Store } from '@component-controls/store';
import { BlockContextProvider } from '../context';
import { store } from './storyStore';

export interface MockContexProps {
  storyId?: string;
  component?: React.ComponentType;
  [key: string]: any;
}

export const MockContext: React.FC<MockContexProps> = ({
  children,
  storyId = 'id-of-story',
}) => {
  const storyStore = React.useMemo(
    () => new Store({ store, updateLocalStorage: false }),
    [],
  );
  return (
    <BlockContextProvider storyId={storyId} mockStore={storyStore}>
      {children}
    </BlockContextProvider>
  );
};
