import React, { FC } from 'react';
import { SourceProps } from '@component-controls/components';
import {
  useStory,
  StoryInputProps,
  useCurrentDocument,
  usePackage,
} from '@component-controls/store';

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
  /**
   * source code options
   */
  sourceProps?: SourceProps;
}
export type StorySourceProps = StorySourceOwnProps &
  StoryBlockContainerProps &
  StoryInputProps;

/**
 * Display source code of a story.
 * If controls are used, all story arguments will be highlighted.
 * Additional commands are made available if the repository data of the story is available.
 */
export const StorySource: FC<StorySourceProps> = ({
  viewStyle,
  id,
  name,
  sourceProps,
  ...rest
}) => {
  const story = useStory({ id, name });
  const doc = useCurrentDocument();
  const docPackage = usePackage(doc?.package);

  return (
    <StoryBlockContainer {...rest}>
      <BaseStorySource
        story={story}
        doc={doc}
        docPackage={docPackage}
        sourceProps={sourceProps}
        viewStyle={viewStyle}
      />
    </StoryBlockContainer>
  );
};
