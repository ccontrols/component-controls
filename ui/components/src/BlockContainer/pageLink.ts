export const pageLink = (id: string) => {
  const url =
    (typeof window !== 'undefined' && window.location !== window.parent.location
      ? document.referrer
      : typeof document !== 'undefined' && document.location.href) || '';
  return `${url.split('#')[0]}#${id}`;
};
