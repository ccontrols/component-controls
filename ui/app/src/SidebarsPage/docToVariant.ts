import { Document } from '@component-controls/core';

export const docToVariant = (doc: Document) => {
  const variant = 'appsidebarpage';
  const layout = doc.layout;
  if (layout?.navSidebar && layout?.contextSidebar) {
    return `${variant}.allsidebar`;
  }
  if (layout?.navSidebar) {
    return `${variant}.navsidebar`;
  }
  if (layout?.contextSidebar) {
    return `${variant}.contextsidebar`;
  }
  return variant;
};
