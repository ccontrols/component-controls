import React, { FC } from 'react';
import {
  Title as TitleBlock,
  TitleProps as TitlePropsBase,
} from '@component-controls/components';
import { useStoryContext, StoryInputProps } from '../context';

export type TitleProps = StoryInputProps & TitlePropsBase;

export const Title: FC<TitleProps> = ({ id, name, ...rest }) => {
  const { component, kind } = useStoryContext({
    id,
    name,
  });
  let title;
  if (component && component.info && component.info.displayName) {
    title = component.info.displayName;
  } else if (kind) {
    const titleParts = kind.title.split('/');
    title = titleParts[titleParts.length - 1];
  }
  return title ? <TitleBlock {...rest}>{title}</TitleBlock> : null;
};
