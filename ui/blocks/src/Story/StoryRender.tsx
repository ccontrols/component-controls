/** @jsx jsx */
import { FC, useState, useEffect, Fragment, forwardRef } from 'react';
import { jsx, CSSProperties, Box } from 'theme-ui';

import Iframe from 'react-frame-component';
import ReactResizeDetector from 'react-resize-detector';
import { Story } from '@component-controls/core';
import { useStore, useExternalOptions } from '@component-controls/store';

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

export type StoryWrapperType = 'wrapper' | 'iframe';

export interface StoryWrapperProps {
  wrapper?: StoryWrapperType;
  iframeStyle?: CSSProperties;
}

const StoryWrapper: FC<StoryWrapperProps> = ({
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
const NAME = 'story';

export interface StoryRenderProps {
  story: Story;
  ref?: React.Ref<HTMLDivElement>;
}
export const StoryRender: FC<StoryRenderProps & StoryWrapperProps> = forwardRef(
  (
    { story, wrapper, iframeStyle, ...rest },
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const [renderedStory, setRenderedStory] = useState<any>(null);
    const store = useStore();
    const options = useExternalOptions();
    useEffect(() => {
      const asyncFn = async () => {
        const rendered = store.config.renderFn
          ? await store.config.renderFn(
              story,
              story.doc ? store.docs[story.doc] : undefined,
              options,
            )
          : null;
        setRenderedStory(rendered);
      };
      asyncFn();
    }, []);
    return (
      <Box
        data-testid={NAME}
        id={story.id}
        variant={`${NAME}.container`}
        {...rest}
      >
        <StoryWrapper iframeStyle={iframeStyle} wrapper={wrapper}>
          <Box
            className="story-render-container"
            variant={`${NAME}.wrapper`}
            ref={ref}
          >
            {renderedStory}
          </Box>
        </StoryWrapper>
      </Box>
    );
  },
);

StoryRender.displayName = 'StoryRender';
