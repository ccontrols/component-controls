import React, { FC } from 'react';
import {
  Subtitle as SubtitleBlock,
  SubtitleProps as SubtitlePropsBase,
} from '@component-controls/components';
import { useStoryContext, StoryInputProps } from '../BlocksContext';

export type SubtitleProps = StoryInputProps & SubtitlePropsBase;

export const Subtitle: FC<SubtitleProps> = ({ id, name, ...rest }) => {
  const { story } = useStoryContext({
    id,
    name,
  });
  const title =
    story && story.parameters ? story.parameters.componentSubtitle : null;
  return title ? <SubtitleBlock {...rest}>{title}</SubtitleBlock> : null;
};
