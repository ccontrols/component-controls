/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC, useState, useContext } from 'react';
import {
  Story,
  StoriesDoc,
  PackageInfo,
} from '@component-controls/specification';
import {
  ThemeContext,
  Source,
  SourceProps,
  ActionItem,
} from '@component-controls/components';
import { repositoryActions } from '../utils/repositoryActions';

export interface BaseStoryConfigProps {
  story?: Story;
  doc?: StoriesDoc;
  docPackage?: PackageInfo;
  sourceProps: SourceProps;
}

export const BaseStoryConfig: FC<BaseStoryConfigProps> = ({
  story,
  doc,
  docPackage,
  sourceProps,
}) => {
  const [showFileSource, setShowFileSource] = useState<boolean>(false);
  const onShowFileSource = () => setShowFileSource(!showFileSource);

  const { dark } = useContext(ThemeContext);
  const allActions: ActionItem[] = [];
  const repositoryItems = repositoryActions(docPackage);
  if (repositoryItems) {
    allActions.push.apply(allActions, repositoryItems);
  }
  if (doc?.source) {
    allActions.push({
      title: showFileSource ? 'story code' : 'file code',
      onClick: onShowFileSource,
    });
  }
  const {
    loc,
    renderFn,
    source,
    //@ts-ignore
    moduleId,
    arguments: storyArgs,
    parameters,
    ...restStory
  } = story || {};
  const { storySource, ...restParameters } = parameters || {};
  if (restParameters && Object.keys(restParameters).length) {
    //@ts-ignore
    restStory.parameters = restParameters;
  }
  return Object.keys(restStory).length ? (
    <Source dark={dark} language="json" {...sourceProps} actions={allActions}>
      {JSON.stringify(restStory, null, 2)}
    </Source>
  ) : null;
};
