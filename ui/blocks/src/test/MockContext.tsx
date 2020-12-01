import React, { FC, ComponentType } from 'react';
import { Document } from '@component-controls/core';
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

export const makeDecorators = (
  storyId = 'id-of-story',
  props?: Omit<MockContexProps, 'storyId'>,
): Document['decorators'] => [
  (controls, context) => (
    <MockContext storyId={storyId} {...props}>
      {context.renderFn(controls, context)}
    </MockContext>
  ),
];

export const mockDecorators: Document['decorators'] = makeDecorators();
