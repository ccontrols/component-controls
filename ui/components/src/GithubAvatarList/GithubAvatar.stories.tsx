import React from 'react';
import { Document, Example } from '@component-controls/core';
import { GithubAvatar, GithubAvatarProps } from './GithubAvatar';

export default {
  title: 'Components/GithubAvatar',
  component: GithubAvatar,
  category: 'Display',
} as Document;

export const overview: Example<GithubAvatarProps> = ({
  size,
  overlap,
  username,
  useremail,
}) => {
  return (
    <GithubAvatar
      size={size}
      overlap={overlap}
      username={username}
      useremail={useremail}
    />
  );
};

overview.controls = {
  username: 'Atanas Stoyanov',
  useremail: 'atanasster@gmail.com',
};
