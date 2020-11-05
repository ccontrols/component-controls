import fs from 'fs';
import React from 'react';
import { PreRenderHTMLArgs, RenderBodyArgs } from 'gatsby';
import { Helmet } from 'react-helmet';

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}: RenderBodyArgs): void => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
    helmet.base.toComponent(),
  ]);
};

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
  //fix issue with facebook ignoring the helmet tags
  headComponents.sort(a => {
    if (
      (a as React.Component).props &&
      (a as React.Component<{ 'data-react-helmet'?: boolean }>).props[
        'data-react-helmet'
      ]
    ) {
      return 0;
    }
    return 1;
  });
  replaceHeadComponents(headComponents);
};
