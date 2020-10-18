export const getURL = () => {
  const pageURL =
    (typeof window !== 'undefined' &&
    window.location !== window.parent.location &&
    window.parent.location
      ? window.parent.location.href
      : typeof document !== 'undefined'
      ? document.location.href
      : undefined) || undefined;
  return pageURL ? new URL(pageURL) : undefined;
};
