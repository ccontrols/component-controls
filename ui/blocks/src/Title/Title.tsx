import React, { FC } from 'react';
import {
  Title as TitleBlock,
  TitleProps as TitlePropsBase,
} from '@component-controls/components';
import { useStoryContext, StoryInputProps } from '../context';
import { getStoryTitle } from '../utils';

export type TitleProps = StoryInputProps & TitlePropsBase;

/**
 * displays a title as assigned to the story document
 */
export const Title: FC<TitleProps> = ({ id, name, children, ...rest }) => {
  const { component, doc } = useStoryContext({
    id,
    name,
  });
  const title =
    typeof children === 'string' ? children : getStoryTitle(doc, component);
  return title ? <TitleBlock {...rest}>{title}</TitleBlock> : null;
};
