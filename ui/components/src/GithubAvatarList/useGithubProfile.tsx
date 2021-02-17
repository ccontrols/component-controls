import { useState, useEffect } from 'react';
import md5 from 'md5';

export interface GithubProfile {
  login: string | null;
  id: number;
  node_id?: string | null;
  avatar_url: string | null;
  gravatar_id?: string | null;
  url?: string | null;
  html_url: string | null;
  followers_url?: string | null;
  following_url?: string | null;
  gists_url?: string | null;
  starred_url?: string | null;
  subscriptions_url?: string | null;
  organizations_url?: string | null;
  repos_url?: string | null;
  events_url?: string | null;
  received_events_url?: string | null;
  type?: string | null;
  site_admin?: boolean | null;
  name?: string | null;
  company?: string | null;
  blog?: string | null;
  location?: string | null;
  email?: string | null;
  hireable?: boolean | null;
  bio?: string | null;
  twitter_username?: string | null;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
}

const profilesCache: Record<string, GithubProfile> = {};

export const useGithubProfile = (
  username: string,
  useremail?: string,
): GithubProfile => {
  const [profile, setProfile] = useState<GithubProfile>(
    profilesCache[username] || {
      login: username,
      email: useremail,
      avatar_url: useremail
        ? `https://www.gravatar.com/avatar/${md5(
            useremail.trim().toLowerCase(),
          )}`
        : `https://github.com/${username}`,
    },
  );
  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(result => {
          profilesCache[username] = result;
          setProfile(result);
        });
    };
    if (!profile.id && typeof fetch !== 'undefined') {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);
  return profile;
};
