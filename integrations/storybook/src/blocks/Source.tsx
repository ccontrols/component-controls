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

const SourceConsumner: FC<SourceProps> = () => (
  <BlockContext.Consumer>
    {({ source, controls, args, fileSource }) => (
      <SourceBlock
        controls={controls}
        args={args}
        prettier={null}
        fileSource={fileSource}
      >
        {source}
      </SourceBlock>
    )}
  </BlockContext.Consumer>
);

export const Source: FC<BlockContextProviderProps & SourceProps> = ({
  title = 'Source code',
  ...rest
}) => (
  <BlockContextProvider {...rest}>
    <SourceConsumner title={title} />
  </BlockContextProvider>
);
