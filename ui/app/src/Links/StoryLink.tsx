import React, { FC, useContext } from 'react';
import { LinkProps } from 'theme-ui';
import { Link } from '@component-controls/app-components';
import { BlockContext } from '@component-controls/blocks';

export interface StoryLinkProps {
  id: string;
}
/**
 * native lonk to a story
 */
export const StoryLink: FC<StoryLinkProps & Omit<LinkProps, 'href'>> = ({
  children,
  id,
  ...props
}) => {
  const { storeProvider } = useContext(BlockContext);
  const story = storeProvider.getStory(id);
  const href = story ? storeProvider.getStoryPath(story.id || '') : '';
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
