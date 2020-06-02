import React, { FC } from 'react';
import { SourceProps } from '@component-controls/components';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';

import { BaseStorySource, ViewStyle } from './BaseStorySource';

export interface StorySourceOwnProps {
  /**
   * initial view mode
   */
  viewStyle?: ViewStyle;
}
export type StorySourceProps = StorySourceOwnProps &
  StoryBlockContainerProps &
  SourceProps;

/**
 * Display source code of a story.
 * If controls are used, all story arguments will be highlighted.
 * Additional commands are made available if the repository data of the story is available.
 */
export const StorySource: FC<StorySourceProps> = ({ viewStyle, ...props }) => {
  return (
    <StoryBlockContainer {...props}>
      {(context, { actions, ...rest }: SourceProps) => {
        const { story, doc, docPackage } = context;
        return (
          <BaseStorySource
            story={story}
            doc={doc}
            docPackage={docPackage}
            actions={actions}
            sourceProps={rest}
            viewStyle={viewStyle}
          />
        );
      }}
    </StoryBlockContainer>
  );
};
