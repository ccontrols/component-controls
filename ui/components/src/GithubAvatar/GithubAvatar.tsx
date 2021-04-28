/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx, Avatar, BoxProps } from 'theme-ui';
import { LocationIcon } from '@primer/octicons-react';
import { Value } from '../Value';
import { Link } from '../Link';
import { Popover } from '../Popover';
import { useGithubProfile } from './useGithubProfile';

export interface GithubAvatarProps {
  /**
   * user name
   */
  username: string;

  /**
   * optional user email to link to gravatar
   */
  useremail?: string;
  /**
   * on hover profile box
   */
  tooltip?: ReactNode;
  /**
   * overlap % of the avatars in a list
   */
  overlap?: number;
  /**
   * size in pixels
   */
  size?: number;
  /**
   * whether to fix the size of the avataro on hover
   */
  fixedSize?: boolean;
  /**
   * to increase access rate for github user profile info
   */
  githubAccessToken?: string;
}

/**
 * avatar to be used in an AvatarList container
 */
export const GithubAvatar: FC<GithubAvatarProps> = ({
  username,
  useremail,
  size = 48,
  overlap = 0.4,
  fixedSize = true,
  githubAccessToken,
}) => {
  const profile = useGithubProfile({ username, useremail, githubAccessToken });
  const profileBox = (
    <div sx={{ p: 2 }}>
      <div sx={{ fontSize: 4, fontWeight: 'bold' }}>
        {profile.name || profile.login}
      </div>
      <div sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.125)', my: 2 }} />
      <div sx={{ display: 'flex', flexDirection: 'row' }}>
        {profile.avatar_url && (
          <div sx={{ display: 'flex', flexDirection: 'column', px: 1 }}>
            <Avatar
              alt={username}
              size={64}
              src={profile.avatar_url || ''}
              title={username}
            />
          </div>
        )}
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            px: 1,
            justifyContent: 'space-between',
          }}
        >
          {profile.name && (
            <div sx={{ fontWeight: 'heading', fontSize: 2 }}>
              {profile.login}
            </div>
          )}
          <p sx={{ maxWidth: 400, py: 0 }}>{profile.bio}</p>
          {profile.location && (
            <div
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <LocationIcon />
              <div sx={{ ml: 1 }}>{profile.location}</div>
            </div>
          )}
        </div>
      </div>
      {(profile.public_repos || profile.public_gists || profile.followers) && (
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(0, 0, 0, 0.125)',
            mt: 2,
            py: 2,
          }}
        >
          <Value label="repos" value={profile.public_repos} />
          <Value label="gists" value={profile.public_gists} />
          <Value label="followers" value={profile.followers} />
        </div>
      )}
    </div>
  );
  const avatar = (
    <Avatar
      size={size}
      src={profile.avatar_url || ''}
      alt={`avatar of ${username}`}
      title={username}
    />
  );
  const imgSx: BoxProps['sx'] = {
    maxWidth: 'unset',
    display: 'block',
    overflow: 'hidden',
    lineHeight: 1,
    width: size,
    height: size,
    verticalAlign: 'middle',
  };
  const link = profile.html_url ? (
    <Link
      aria-label={`visit profile of ${username}`}
      href={profile.html_url}
      sx={imgSx}
    >
      {avatar}
    </Link>
  ) : (
    <div sx={imgSx}>{avatar}</div>
  );
  return (
    <Popover
      trigger="hover"
      placement="bottom-start"
      tooltip={() => profileBox}
      sx={{
        maxWidth: fixedSize ? undefined : Math.round(size * (1 - overlap)),
        transition: '0.2s ease',
        ':hover': !fixedSize
          ? {
              maxWidth: size,
            }
          : {},
      }}
    >
      {link}
    </Popover>
  );
};
