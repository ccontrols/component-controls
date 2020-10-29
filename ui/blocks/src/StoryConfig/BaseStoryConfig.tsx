/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx } from 'theme-ui';
import { FC, useState } from 'react';
import { Story, Document, PackageInfo } from '@component-controls/core';
import {
  Source,
  SourceProps,
  ActionItem,
} from '@component-controls/components';
import { repositoryActions } from '../utils/repositoryActions';

export interface BaseStoryConfigProps {
  story?: Story;
  doc?: Document;
  docPackage?: PackageInfo;
  sourceProps?: SourceProps;
}

export const BaseStoryConfig: FC<BaseStoryConfigProps> = ({
  story,
  doc,
  docPackage,
  sourceProps,
}) => {
  const [showFileSource, setShowFileSource] = useState<boolean>(false);
  const onShowFileSource = () => setShowFileSource(!showFileSource);

  const allActions: ActionItem[] = [];
  const repositoryItems = repositoryActions(docPackage);
  if (repositoryItems) {
    allActions.push(...repositoryItems);
  }
  if (doc?.source) {
    allActions.push({
      node: showFileSource ? 'story code' : 'file code',
      onClick: onShowFileSource,
    });
  }
  const { loc, renderFn, source, arguments: storyArgs, ...restStory } =
    story || {};
  return Object.keys(restStory).length ? (
    <Source language="json" {...sourceProps} actions={allActions}>
      {JSON.stringify(restStory, null, 2)}
    </Source>
  ) : null;
};
