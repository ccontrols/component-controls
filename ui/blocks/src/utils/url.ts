export const getURL = () => {
  const pageURL =
    (typeof window !== 'undefined' &&
    window.location !== window.parent.location &&
    window.parent.location
      ? window.parent.location.href
      : document.location.href) || '';
  return new URL(pageURL);
};
