import React, { FC } from 'react';
import {
  Subtitle as SubtitleBlock,
  SubtitleProps as SubtitlePropsBase,
} from '@component-controls/components';
import { useStoryContext, StoryInputProps } from '../context';

export type SubtitleProps = StoryInputProps & SubtitlePropsBase;

/**
 * displays a subtitle as assigned to the story parameters:
 * or story.subtitle
 *
 */
export const Subtitle: FC<SubtitleProps> = ({ id, name, ...rest }) => {
  const { story } = useStoryContext({
    id,
    name,
  });
  const title = story ? story.subtitle : null;
  return title ? <SubtitleBlock {...rest}>{title}</SubtitleBlock> : null;
};
