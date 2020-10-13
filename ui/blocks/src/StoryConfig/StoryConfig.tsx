/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC } from 'react';
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
import { BaseStoryConfig } from './BaseStoryConfig';

export type StoryConfigProps = StoryBlockContainerProps & {
  sourceProps?: SourceProps;
} & StoryInputProps;

/**
 * Displays the configuration object of a story.
 */
export const StoryConfig: FC<StoryConfigProps> = ({
  id,
  name,
  sourceProps,
  ...rest
}) => {
  const story = useStory({ id, name });
  const doc = useCurrentDocument();
  const docPackage = usePackage(doc?.package);
  return (
    <StoryBlockContainer story={story} {...rest}>
      <BaseStoryConfig
        story={story}
        doc={doc}
        docPackage={docPackage}
        sourceProps={sourceProps}
      />
    </StoryBlockContainer>
  );
};
