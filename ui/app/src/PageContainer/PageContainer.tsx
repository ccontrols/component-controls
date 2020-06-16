import React, { FC, useContext, forwardRef } from 'react';
import {
  BlockContext,
  PageContainer as BlockPageContainer,
  PageContainerProps,
} from '@component-controls/blocks';
import { Container as DefaultContainer } from '../Container';

export const PageContainer: FC<Omit<
  PageContainerProps,
  'wrapper'
>> = forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
  const { storeProvider } = useContext(BlockContext);
  const { container = DefaultContainer } = storeProvider.config || {};
  return <BlockPageContainer ref={ref} wrapper={container} {...props} />;
});
