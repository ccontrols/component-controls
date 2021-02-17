/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx, Box, BoxProps } from 'theme-ui';
import { GithubAvatarItem, GithubAvatarItemProps } from './GithubAvatarItem';

export interface GithubAvatarUser {
  username: string;
  useremail?: string;
}

export interface GithubAvatarListOwnProps {
  /**
   * list of github user names
   */
  users: GithubAvatarUser[];

  /**
   * max number of avatars, then use a '...'
   */
  maxItems?: number;
}

export type GithubAvatarListProps = GithubAvatarListOwnProps &
  Omit<GithubAvatarItemProps, 'username' | 'useremail'> &
  BoxProps;

/**
 * Avatar list that links to github profiles using rest api
 */

export const GithubAvatarList: FC<GithubAvatarListProps> = ({
  users,
  size = 32,
  overlap = 0.4,
  maxItems = 7,
  ...rest
}) => {
  const width = useMemo(() => {
    const halfSizes = Math.max(0, users.length - 2) * size * overlap;
    const expanded = Math.max(users.length, 1) * size; // the last item and the hovered items
    return halfSizes + expanded;
  }, [size, overlap, users.length]);
  const lastIndex = Math.min(maxItems, users.length) - 1;
  return (
    <Box
      aria-label={`avatars of ${users.join(', ')}`}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width,
      }}
      {...rest}
    >
      {users.slice(0, maxItems).map((user, index) => (
        <GithubAvatarItem
          key={`avatar_item${user.username}`}
          size={size}
          username={user.username}
          useremail={user.useremail}
          overlap={overlap}
          freeze={index === lastIndex}
        />
      ))}
      {users.length > maxItems && (
        <div sx={{ ml: `${Math.round(overlap * size)}px`, fontWeight: 'bold' }}>
          ...
        </div>
      )}
    </Box>
  );
};
