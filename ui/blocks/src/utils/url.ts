import queryString from 'query-string';

export const getURL = (): URL | undefined => {
  let pageURL = undefined;
  if (typeof window !== 'undefined') {
    if (window.location !== window.parent.location && window.parent.location) {
      pageURL = window.parent.location.href;
    } else {
      pageURL = document.location.href;
    }
  }
  return pageURL ? new URL(pageURL) : undefined;
};
export const getUpdatedUrlParams = (
  paremName: string,
  value?: string,
): string | undefined => {
  const url = getURL();
  if (url) {
    const parsedParams = queryString.parse(url.search);
    if (value) {
      parsedParams[paremName] = value;
    } else {
      delete parsedParams[paremName];
    }
    const strValues = queryString.stringify(parsedParams);
    const newURL = `${url.protocol}//${url.host}${url.pathname}${
      strValues ? `?${strValues}` : ''
    }${url.hash ? `#${url.hash}` : ''}`;
    return newURL;
  }
  return undefined;
};

export const getUrlParams = (paremName: string): any => {
  const url = getURL();
  if (url) {
    const parsedParams = queryString.parse(url.search);
    const params = parsedParams[paremName];
    if (params && typeof params === 'string') {
      return unescape(params);
    }
  }
  return undefined;
};
