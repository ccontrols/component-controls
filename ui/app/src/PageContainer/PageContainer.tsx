import React, { FC, forwardRef, Ref } from 'react';
import { DocType } from '@component-controls/core';
import { useConfig } from '@component-controls/store';
import {
  PageContainer as BlockPageContainer,
  PageContainerProps as BlockPageContainerProps,
} from '@component-controls/blocks';

import { Container as DefaultContainer } from '../Container';

export type PageContainerProps = {
  /**
   * document type
   */
  type: DocType;
} & BlockPageContainerProps;

/**
 * page container to enhance the inner page wrapper
 */
export const PageContainer: FC<PageContainerProps> = forwardRef(
  function PageContainer(
    { type, wrapper = DefaultContainer, ...props },
    ref: Ref<HTMLDivElement>,
  ) {
    const config = useConfig();
    const { pages } = config || {};
    const page = pages ? pages[type] : undefined;
    const { container = wrapper } = page || {};
    return <BlockPageContainer ref={ref} wrapper={container} {...props} />;
  },
);
