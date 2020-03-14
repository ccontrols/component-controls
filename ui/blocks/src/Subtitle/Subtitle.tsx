import React, { FC } from 'react';
import {
  Subtitle as SubtitleBlock,
  SubtitleProps as SubtitlePropsBase,
} from '@component-controls/components';
import { useControlsContext, StoryInputProps } from '../BlocksContext';

export type SubtitleProps = StoryInputProps & SubtitlePropsBase;

export const Subtitle: FC<SubtitleProps> = ({ id, name, ...rest }) => {
  const { story } = useControlsContext({
    id,
    name,
  });
  const title =
    story && story.attributes && story.attributes.parameters
      ? story.attributes.parameters.componentSubtitle
      : null;
  return title ? <SubtitleBlock {...rest}>{title}</SubtitleBlock> : null;
};
