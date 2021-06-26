/** @jsx jsx */
import { FC, forwardRef, Ref, useState, Fragment } from 'react';
import { jsx, CSSProperties, Box, BoxProps } from 'theme-ui';

import Iframe from 'react-frame-component';
import ReactResizeDetector from 'react-resize-detector';
import { Story } from '@component-controls/core';
import { useStore, useUserData } from '@component-controls/store';

export interface IframeWrapperProps {
  initialIframeContent?: string;
  style?: CSSProperties;
  title?: string;
}

const IframeWrapper: FC<IframeWrapperProps> = ({
  children,
  title,
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
    { height?: number; width?: number } | undefined
  >();
  return (
    <Iframe
      initialContent={initialIframeContent}
      title={title}
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

export type StoryWrapperType = 'wrapper' | 'iframe';

export interface StoryWrapperProps {
  wrapper?: StoryWrapperType;
  iframeStyle?: CSSProperties;
  title?: string;
}

const StoryWrapper: FC<StoryWrapperProps> = ({
  wrapper = 'wrapper',
  iframeStyle,
  children,
  title,
}) => {
  switch (wrapper) {
    case 'iframe':
      return (
        <IframeWrapper title={title} style={iframeStyle}>
          {children}
        </IframeWrapper>
      );
    default:
      return <Fragment>{children}</Fragment>;
  }
};
export const NAME = 'story';

export type StoryRenderProps = {
  story: Story;
  ref?: Ref<HTMLDivElement>;
} & BoxProps;
export const StoryRender: FC<StoryRenderProps & StoryWrapperProps> = forwardRef(
  function StoryRender(
    { story, wrapper, iframeStyle, ...rest },
    ref: Ref<HTMLDivElement>,
  ) {
    const store = useStore();
    const options = useUserData();
    const doc = store.docs[story.doc as string];
    const rendered = doc.renderFn({
      story,
      doc,
      options,
    });
    return (
      <Box
        data-testid={NAME}
        id={story.id}
        variant={`${NAME}.container`}
        {...rest}
      >
        <StoryWrapper
          title={story.name}
          iframeStyle={iframeStyle}
          wrapper={wrapper}
        >
          <Box
            className="story-render-container"
            variant={`${NAME}.wrapper`}
            ref={ref}
          >
            {rendered}
          </Box>
        </StoryWrapper>
      </Box>
    );
  },
);

StoryRender.displayName = 'StoryRender';
