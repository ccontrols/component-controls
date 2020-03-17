import React, { FC } from 'react';
import { Markdown, MarkdownProps } from '@component-controls/components';
import { ComponentsContainer } from '../context/components/ComponentsContainer';
import { ComponentInputProps } from '../context/components/ComponentsContext';

export type DescriptionProps = Omit<MarkdownProps, 'children'> &
  ComponentInputProps;

/**
 * Description component with context
 * 'of' property can specify which component's description to use
 */
export const Description: FC<DescriptionProps> = ({ of, ...rest }) => (
  <ComponentsContainer of={of}>
    {component => {
      if (!component || !component.info || !component.info.description) {
        return null;
      }
      return <Markdown {...rest}>{component.info.description}</Markdown>;
    }}
  </ComponentsContainer>
);
