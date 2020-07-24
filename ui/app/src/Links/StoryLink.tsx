import React, { FC } from 'react';
import { LinkProps } from 'theme-ui';
import { Link } from '@component-controls/components';
import { useStoryPath } from '@component-controls/blocks';

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
  const href = useStoryPath(id);
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
