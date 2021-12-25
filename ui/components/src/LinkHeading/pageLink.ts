export const titleToId = (id?: string | null | Record<string, any>): string => {
  const strId = typeof id === 'string' ? id : '';
  const value = strId.replace(/\W/g, '-').toLowerCase();
  if (value.match(/^[A-Z]/i)) {
    return value;
  }
  //firce start with letter
  return value ? `i-${value}` : value;
};
export const pageLink = (id: string): string => {
  let url = '';
  if (typeof window !== 'undefined') {
    if (window.location !== window.parent.location) {
      url = document.referrer;
    } else {
      url = document.location.href || '';
    }
  }
  return `${url.split('#')[0]}#${id}`;
};
