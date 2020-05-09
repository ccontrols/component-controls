/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC, useState, useContext } from 'react';
import {
  ThemeContext,
  Source,
  SourceProps,
  ActionItem,
} from '@component-controls/components';
import { repositoryActions } from '../utils/repositoryActions';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';

export type StoryConfigProps = StoryBlockContainerProps & SourceProps;

/**
 * Displays the configuration object of a story.
 */
export const StoryConfig: FC<StoryConfigProps> = props => {
  const [showFileSource, setShowFileSource] = useState<boolean>(false);

  return (
    <StoryBlockContainer {...props}>
      {(context, sourceProps: SourceProps) => {
        const onShowFileSource = () => setShowFileSource(!showFileSource);

        const { story, kind, kindPackage } = context;
        const { dark } = useContext(ThemeContext);
        const allActions: ActionItem[] = [];
        const repositoryItems = repositoryActions(kindPackage);
        if (repositoryItems) {
          allActions.push.apply(allActions, repositoryItems);
        }
        if (kind?.source) {
          allActions.push({
            title: showFileSource ? 'story code' : 'file code',
            onClick: onShowFileSource,
          });
        }
        const { loc, renderFn, source, arguments: storyArgs, ...other } =
          story || {};
        return Object.keys(other).length ? (
          <Source
            dark={dark}
            language="json"
            {...sourceProps}
            actions={allActions}
          >
            {JSON.stringify(other, null, 2)}
          </Source>
        ) : null;
      }}
    </StoryBlockContainer>
  );
};
