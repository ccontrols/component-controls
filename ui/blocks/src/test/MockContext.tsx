import React, { FC, ComponentType } from 'react';
import { BlockContextProvider } from '../context';
import { store } from './storyStore';

export interface MockContexProps {
  storyId?: string;
  component?: ComponentType;
  [key: string]: any;
}

export const MockContext: FC<MockContexProps> = ({
  children,
  storyId = 'id-of-story',
}) => {
  return (
    <BlockContextProvider storyId={storyId} store={store}>
      {children}
    </BlockContextProvider>
  );
};
