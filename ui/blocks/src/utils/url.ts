export const getURL = () => {
  const pageURL =
    (typeof window !== 'undefined' &&
    window.location !== window.parent.location &&
    window.parent.location
      ? window.parent.location.href
      : typeof document
      ? document.location.href
      : '') || '';
  return new URL(pageURL);
};
