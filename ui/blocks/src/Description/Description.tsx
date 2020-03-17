import React, { FC } from 'react';
import { Markdown, MarkdownProps } from '@component-controls/components';
import { useComponentsContext, ComponentInputProps } from '../BlocksContext';

export type DescriptionProps = Omit<MarkdownProps, 'children'> &
  ComponentInputProps;

/**
 * Description component with context
 * 'of' property can specify which component's description to use
 */
export const Description: FC<DescriptionProps> = ({ of, ...rest }) => {
  const { components } = useComponentsContext({ of });
  const component = components.length > 0 && components[0];
  if (!component || !component.info || !component.info.description) {
    return null;
  }
  return <Markdown {...rest}>{component.info.description}</Markdown>;
};
