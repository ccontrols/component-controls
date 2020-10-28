import fs from 'fs';
import React from 'react';
import { PreRenderHTMLArgs } from 'gatsby';

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}: PreRenderHTMLArgs): void => {
  const headComponents = getHeadComponents();
  const cssBundle = process.env.GATSBY_CC_CSS_FILENAME;
  if (cssBundle && fs.existsSync(cssBundle)) {
    const cssStyles = fs.readFileSync(cssBundle, 'utf8');
    headComponents.push(<style key="controls-styles">{cssStyles}</style>);
  }
  replaceHeadComponents(headComponents);
};
