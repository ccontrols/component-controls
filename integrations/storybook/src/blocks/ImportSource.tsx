import React, { FC } from 'react';
import { Source as SourceBlock } from '@component-controls/blocks-core';
import {
  BlockContext,
  BlockContextProvider,
  BlockContextProviderProps,
} from './BlockContext';

export interface SourceProps {
  /** a title to display */
  title?: string;
}

const SourceConsumer: FC<SourceProps> = () => (
  <BlockContext.Consumer>
    {({ import: source }) => <SourceBlock source={source || ''} />}
  </BlockContext.Consumer>
);

export const ImportSource: FC<BlockContextProviderProps & SourceProps> = ({
  title = 'Import component',
  ...rest
}) => (
  <BlockContextProvider {...rest}>
    <SourceConsumer title={title} />
  </BlockContextProvider>
);
