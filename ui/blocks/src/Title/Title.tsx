/** @jsx jsx */
import { FC } from 'react';
import { jsx, Themed, BoxProps } from 'theme-ui';
import {
  useStory,
  useDocument,
  useStoryComponent,
  StoryInputProps,
} from '@component-controls/store';
import { getStoryTitle } from '../utils';
import { ComponentContributors } from '../ComponentContributors';

export type TitleProps = { contributors?: boolean } & StoryInputProps &
  BoxProps;

/**
 * displays a title as assigned to the story document
 */
export const Title: FC<TitleProps> = ({
  id,
  name,
  contributors = true,
  children,
  ...rest
}) => {
  const story = useStory({
    id,
    name,
  });
  const doc = useDocument(story?.doc);
  const component = useStoryComponent({
    id,
    name,
  });
  const title =
    typeof children === 'string' ? children : getStoryTitle(doc, component);
  return title ? (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      {...rest}
    >
      <Themed.h1>{title}</Themed.h1>
      {contributors && <ComponentContributors component={component} />}
    </div>
  ) : null;
};
