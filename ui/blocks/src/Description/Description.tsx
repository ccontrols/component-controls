import React, { FC } from 'react';
import { Markdown, MarkdownProps } from '@component-controls/components';
import { useControlsContext, ComponentInputProps } from '../BlocksContext';

export type DescriptionProps = Omit<MarkdownProps, 'children'> &
  ComponentInputProps;

/**
 * Description component with context
 * 'of' property can specify which component's description to use
 */
export const Description: FC<DescriptionProps> = ({ of, ...rest }) => {
  const p = useControlsContext({ of });
  const { component } = p;
  if (!component || !component.info || !component.info.description) {
    return null;
  }
  return <Markdown {...rest}>{component.info.description}</Markdown>;
};
