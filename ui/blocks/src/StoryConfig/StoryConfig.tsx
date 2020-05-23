/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import { SourceProps } from '@component-controls/components';

import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';
import { BaseStoryConfig } from './BaseStoryConfig';

export type StoryConfigProps = StoryBlockContainerProps & SourceProps;

/**
 * Displays the configuration object of a story.
 */
export const StoryConfig: FC<StoryConfigProps> = props => {
  return (
    <StoryBlockContainer {...props}>
      {(context, sourceProps: SourceProps) => {
        const { story, kind, kindPackage } = context;
        return (
          <BaseStoryConfig
            story={story}
            kind={kind}
            kindPackage={kindPackage}
            sourceProps={sourceProps}
          />
        );
      }}
    </StoryBlockContainer>
  );
};
