/** @jsx jsx */
import { FC, useState, Fragment } from 'react';
import { jsx, CSSProperties } from 'theme-ui';

import Iframe from 'react-frame-component';
import ReactResizeDetector from 'react-resize-detector';

export interface IframeWrapperProps {
  initialIframeContent?: string;
  style?: CSSProperties;
}

const IframeWrapper: FC<IframeWrapperProps> = ({
  children,
  style = { border: 0 },
  initialIframeContent = `
<!DOCTYPE html>
<html lang="eng">
  <head>
    <style>
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div>
    </div>
  </body>
</html>
`,
}) => {
  const [size, setSize] = useState<
    { height: number; width: number } | undefined
  >();
  return (
    <Iframe
      initialContent={initialIframeContent}
      style={{ ...style, height: size?.height, width: '100%' }}
    >
      <ReactResizeDetector
        handleHeight
        onResize={(width, height) => {
          setSize({ width, height });
        }}
      >
        {children}
      </ReactResizeDetector>
    </Iframe>
  );
};

export type StoryWrapper = 'wrapper' | 'iframe';

export interface StoryRenderProps {
  wrapper?: StoryWrapper;
  iframeStyle?: CSSProperties;
}
export const StoryRender: FC<StoryRenderProps> = ({
  wrapper = 'wrapper',
  iframeStyle,
  children,
}) => {
  switch (wrapper) {
    case 'iframe':
      return <IframeWrapper style={iframeStyle}>{children}</IframeWrapper>;
    default:
      return <Fragment>{children}</Fragment>;
  }
};
