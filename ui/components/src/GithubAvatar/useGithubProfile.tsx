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

export const useGithubProfile = ({
  username,
  useremail,
  githubAccessToken,
  size = 128,
}: {
  username: string;
  useremail?: string;
  githubAccessToken?: string;
  size?: number;
}): GithubProfile => {
  const [profile, setProfile] = useState<GithubProfile>(
    profilesCache[username] || {
      login: username,
      email: useremail,
      avatar_url: useremail
        ? `//www.gravatar.com/avatar/${md5(useremail)}?s=${size}`
        : `//github.com/${username}`,
    },
  );
  useEffect(() => {
    const headers = githubAccessToken
      ? {
          Authorization: `token ${githubAccessToken}`,
        }
      : undefined;
    const fetchData = async () => {
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
        headers,
      })
        .then(res => res.json())
        .then(result => {
          if (!result.message) {
            profilesCache[username] = result;
            setProfile(profilesCache[username]);
          } else {
            // could not find
            profilesCache[username] = profile;
            fetch(
              `https://api.github.com/search/users?q=${encodeURIComponent(
                `${username} in:name`,
              )}`,
              {
                headers,
              },
            )
              .then(res => res.json())
              .then(result => {
                if (result.items) {
                  // if only one user with this user name is found, attach it
                  if (result.items.length === 1) {
                    profilesCache[username] = result.items[0];
                    setProfile(profilesCache[username]);
                  } else if (useremail) {
                    // search for email matching the github login
                    const lcEmail = useremail.toLowerCase();
                    const match = result.items.find(
                      (item: { login: string; email: string | null }) =>
                        item.email?.toLowerCase() === lcEmail ||
                        lcEmail.includes(item.login),
                    );
                    if (match) {
                      fetch(
                        `https://api.github.com/users/${encodeURIComponent(
                          match.login,
                        )}`,
                        {
                          headers,
                        },
                      )
                        .then(res => res.json())
                        .then(result => {
                          profilesCache[username] = result;
                          setProfile(profilesCache[username]);
                        });
                    }
                  }
                }
              });
          }
        })
        .catch(() => {
          profilesCache[username] = profile;
        });
    };
    if (!profile.id && typeof fetch !== 'undefined') {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);
  return profile;
};
