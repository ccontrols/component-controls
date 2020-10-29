import { Document } from '@component-controls/core';

export const docToVariant = (doc: Document): string => {
  const variant = 'appsidebarpage';
  if (doc.navSidebar && doc.contextSidebar) {
    return `${variant}.allsidebar`;
  }
  if (doc.navSidebar) {
    return `${variant}.navsidebar`;
  }
  if (doc.contextSidebar) {
    return `${variant}.contextsidebar`;
  }
  return variant;
};
