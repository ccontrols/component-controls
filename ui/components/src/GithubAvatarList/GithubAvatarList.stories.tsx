import React from 'react';
import { Document, Example } from '@component-controls/core';
import { GithubAvatarList, GithubAvatarListProps } from './GithubAvatarList';

export default {
  title: 'Components/GithubAvatarList',
  component: GithubAvatarList,
  category: 'Display',
} as Document;

export const overview: Example<GithubAvatarListProps> = ({ size, overlap }) => {
  return (
    <GithubAvatarList
      size={size}
      overlap={overlap}
      users={[{ username: 'martin-stoyanov' }, { username: 'atanasster' }]}
    />
  );
};

export const maxItems: Example<GithubAvatarListProps> = () => {
  return (
    <GithubAvatarList
      maxItems={2}
      users={[{ username: 'martin-stoyanov' }, { username: 'atanasster' }]}
    />
  );
};
