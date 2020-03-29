import React, { FC } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';
import { ComponentsContainer, ComponentsContainerProps } from '../../context';

export type ComponentsBlockContainerProps = ComponentsContainerProps &
  Omit<BlockContainerProps, 'id'>;

export const ComponentsBlockContainer: FC<ComponentsBlockContainerProps> = ({
  title,
  collapsible,
  of,
  children,
}) => {
  return (
    <BlockContainer title={title} collapsible={collapsible}>
      <ComponentsContainer of={of}>
        {(component, props) => children(component, props)}
      </ComponentsContainer>
    </BlockContainer>
  );
};
