import React, { FC } from 'react';
import {
  Title as TitleBlock,
  TitleProps as TitlePropsBase,
} from '@component-controls/components';
import {
  useStory,
  useDocument,
  useStoryComponent,
  StoryInputProps,
} from '@component-controls/store';
import { getStoryTitle } from '../utils';

export type TitleProps = StoryInputProps & TitlePropsBase;

/**
 * displays a title as assigned to the story document
 */
export const Title: FC<TitleProps> = ({ id, name, children, ...rest }) => {
  const story = useStory({
    id,
    name,
  });
  const doc = useDocument(story?.doc);
  const component = useStoryComponent({
    id,
    name,
  });
  const title =
    typeof children === 'string' ? children : getStoryTitle(doc, component);
  return title ? <TitleBlock {...rest}>{title}</TitleBlock> : null;
};
