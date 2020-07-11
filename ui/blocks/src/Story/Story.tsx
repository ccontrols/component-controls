/** @jsx jsx */
import { FC, createElement, forwardRef, useEffect } from 'react';
import { jsx, Box, CSSProperties } from 'theme-ui';
import {
  deepMerge,
  StoryRenderFn,
  getControlValues,
} from '@component-controls/core';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';
import { useCustomProps } from '../context';
import { StoryWrapper, StoryRender } from './StoryRender';

const NAME = 'story';

export type StoryProps = StoryBlockContainerProps & {
  /**
   * ref can be used by blocks embedding Story - ie ally plugin
   */
  ref?: React.Ref<HTMLDivElement>;
  /**
   * used by other blocks
   * ie ally plugin uses it launch a new ally test on re-render
   */
  onRender?: () => void;
  /**
   * wrapper type - can be an iframe or just regular react
   */
  wrapper?: StoryWrapper;
  /**
   * if an iframe wrapper - this is additional iframe style
   */
  iframeStyle?: CSSProperties;
};

/**
 * block component to render story function with decorators
 */
export const Story: FC<StoryProps> = forwardRef(
  (props: StoryProps, ref: React.Ref<HTMLDivElement>) => {
    const custom = useCustomProps<StoryProps>(NAME, props);
    const { wrapper, onRender, iframeStyle, ...rest } = custom;
    useEffect(() => onRender && onRender());
    return (
      <StoryBlockContainer {...rest}>
        {(context, rest) => {
          const { story, doc, options = {} } = context;
          if (story && story.renderFn) {
            try {
              const values = getControlValues(story.controls);
              const { decorators: globalDecorators = [] } = options;
              const { decorators: storyDecorators = [] } = story;
              const decorators = deepMerge(globalDecorators, storyDecorators);
              //parameters added to avoid bug in SB6 rc that it assumes parameters exist
              const storyContext = { ...context, parameters: {} };
              const renderFn = decorators.reverse().reduce(
                (acc: StoryRenderFn, item: StoryRenderFn) => () =>
                  item(acc, { ...storyContext, renderFn: acc }),
                //@ts-ignore
                () => story.renderFn(values, storyContext),
              );
              return (
                <Box
                  data-testid={NAME}
                  id={story.id}
                  variant={`${NAME}.container`}
                  {...rest}
                >
                  <StoryRender iframeStyle={iframeStyle} wrapper={wrapper}>
                    <Box
                      className="story-render-container"
                      variant={`${NAME}.wrapper`}
                      ref={ref}
                    >
                      {createElement(renderFn)}
                    </Box>
                  </StoryRender>
                </Box>
              );
            } catch (e) {
              console.error(e);
            }
          }
          console.error('Story function not found', rest, doc);
          return null;
        }}
      </StoryBlockContainer>
    );
  },
);

Story.displayName = 'Story';
