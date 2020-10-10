import { useMemo } from 'react';

export const useIsLocalLink = (link?: string): boolean => {
  //https://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative/10687158
  const r = useMemo(() => new RegExp('^(?:[a-z]+:)?//', 'i'), []);
  return typeof link === 'string' && !r.test(link);
};
