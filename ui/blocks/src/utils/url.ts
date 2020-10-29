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
