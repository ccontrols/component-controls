/** @jsx jsx */
import { FC, forwardRef, useEffect } from 'react';
import { jsx, CSSProperties } from 'theme-ui';
import { useStory, StoryInputProps } from '@component-controls/store';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';
import { useCustomProps } from '../context';
import { StoryRender, StoryWrapperType } from './StoryRender';

const NAME = 'story';

export interface StoryOwnProps {
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
  wrapper?: StoryWrapperType;
  /**
   * if an iframe wrapper - this is additional iframe style
   */
  iframeStyle?: CSSProperties;
}

export type StoryProps = StoryOwnProps &
  StoryInputProps &
  StoryBlockContainerProps;
/**
 * block component to render story function with decorators
 */
export const Story: FC<StoryProps> = forwardRef(
  (fullProps: StoryProps, ref: React.Ref<HTMLDivElement>) => {
    const custom = useCustomProps<StoryProps>(NAME, fullProps);
    const { wrapper, onRender, iframeStyle, ...props } = custom;
    useEffect(() => onRender && onRender());

    const { id, name, ...rest } = props;
    const story = useStory({ id, name });

    if (story && story.id && story.renderFn) {
      return (
        <StoryBlockContainer {...rest}>
          <StoryRender
            ref={ref}
            storyId={story.id}
            iframeStyle={iframeStyle}
            wrapper={wrapper}
          />
        </StoryBlockContainer>
      );
    } else {
      console.error('Story function not found');
      return null;
    }
  },
);

Story.displayName = 'Story';
