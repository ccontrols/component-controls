/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx } from 'theme-ui';
import { Component } from '@component-controls/core';
import {
  GithubAvatarList,
  GithubAvatarListProps,
  GithubAvatarUser,
} from '@component-controls/components';
import { useCustomProps } from '../context';
import { useConfig } from '@component-controls/store';

export interface ComponentContributorsProps {
  caption?: string;
  component?: Component;
}

export const ComponentContributors: FC<
  ComponentContributorsProps & Omit<GithubAvatarListProps, 'users'>
> = ({ caption, component, ...rest }) => {
  const props = useCustomProps<Omit<GithubAvatarListProps, 'users'>>(
    'component_contributors',
    rest,
  );
  const config = useConfig();
  const { tokens } = config;
  const contributors = useMemo(() => {
    if (!component?.fileInfo?.commits?.length) {
      return [];
    }
    return component.fileInfo.commits.reduce(
      (acc: GithubAvatarUser[], commit) => {
        if (!acc.find(a => a.username === commit.authorName)) {
          if (commit.authorName) {
            acc.push({
              username: commit.authorName,
              useremail: commit.authorEmail,
            });
          }
        }
        if (!acc.find(a => a.username === commit.committerName)) {
          if (commit.committerName) {
            acc.push({
              username: commit.committerName,
              useremail: commit.committerEmail,
            });
          }
        }
        return acc;
      },
      [],
    );
  }, [component?.fileInfo?.commits]);
  return !!contributors.length ? (
    <div sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      {caption && <div sx={{ mr: 1 }}>{caption}</div>}
      <GithubAvatarList
        githubAccessToken={tokens?.githubAccessToken}
        users={contributors}
        size={24}
        {...props}
      />
    </div>
  ) : null;
};
