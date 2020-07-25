import React, { FC } from 'react';
import { Markdown, MarkdownProps } from '@component-controls/components';
import { ComponentsContainer } from '../context/components/ComponentsContainer';
import { useComponents, ComponentInputProps } from '@component-controls/store';

export type DescriptionProps = Omit<MarkdownProps, 'children'> &
  ComponentInputProps;

/**
 * Description component with markdown.
 * The 'of' property can specify which component's description to display.
 */
export const Description: FC<DescriptionProps> = ({ of, ...rest }) => {
  const components = useComponents({ of });
  return (
    <ComponentsContainer components={components}>
      {component => {
        if (!component || !component.info || !component.info.description) {
          return null;
        }
        return <Markdown {...rest}>{component.info.description}</Markdown>;
      }}
    </ComponentsContainer>
  );
};
