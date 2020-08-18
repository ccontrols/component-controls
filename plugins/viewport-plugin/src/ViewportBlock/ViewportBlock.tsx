/** @jsx jsx */
import { FC, useState } from 'react';
import { Box, jsx } from 'theme-ui';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '@component-controls/blocks';
import { useStory, StoryInputProps } from '@component-controls/store';
import { ActionContainer } from '@component-controls/components';
import { ViewportBox } from './ViewportBox';

export interface ViewportBlockOwnProps {
  sizes?: Record<string, number>;
}

export type ViewportBlockProps = ViewportBlockOwnProps &
  StoryBlockContainerProps &
  StoryInputProps;
export const ViewportBlock: FC<ViewportBlockProps> = ({
  id,
  name,
  sizes = {
    xsmall: 320,
    small: 375,
    medium: 768,
    large: 1024,
  },
  ...props
}) => {
  const story = useStory({ id, name });
  const [visible, setVisible] = useState({ ...sizes });
  return story?.id ? (
    <StoryBlockContainer story={story} {...props}>
      <ActionContainer
        actions={Object.keys(visible)
          .reverse()
          .map(name => ({
            node: name,
            onClick: () =>
              setVisible({
                ...visible,
                [name]: visible[name] ? 0 : sizes[name],
              }),
          }))}
        plain={true}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '100vh',
            width: '100%',
            overflow: 'auto',
            pt: 2,
            pl: 1,
          }}
        >
          {Object.keys(visible)
            .filter(name => visible[name])
            .map(name => (
              <ViewportBox key={name} storyId={story.id} size={visible[name]} />
            ))}
        </Box>
      </ActionContainer>
    </StoryBlockContainer>
  ) : null;
};
