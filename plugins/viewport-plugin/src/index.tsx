/** @jsx jsx */
import { FC } from 'react';
import { Box, Theme, jsx } from 'theme-ui';
import {
  StoryBlockContainer,
  Story,
  StoryBlockContainerProps,
} from '@component-controls/blocks';

export const ViewportBlock: FC<StoryBlockContainerProps> = props => {
  return (
    <StoryBlockContainer {...props}>
      {({ story: { id: storyId } = {} }) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            minHeight: '250px',
            height: '400px',
            width: '100%',
            overflow: 'auto',
            p: 1,
            boxShadow: (t: Theme) => `0px 2px 6px 0px ${t.colors?.shadow}`,
          }}
        >
          <Box
            sx={{
              minWidth: '250px',
              height: '500px',
              m: 1,
              boxShadow: (t: Theme) => `0px 2px 6px 0px ${t.colors?.shadow}`,
            }}
          >
            <Story id={storyId} />
          </Box>
          <Box
            sx={{
              minWidth: '500px',
              height: '500px',
              m: 1,
              boxShadow: (t: Theme) => `0px 2px 6px 0px ${t.colors?.shadow}`,
            }}
          >
            <Story id={storyId} />
          </Box>
          <Box
            sx={{
              minWidth: '900px',
              height: '500px',
              m: 1,
              boxShadow: (t: Theme) => `0px 2px 6px 0px ${t.colors?.shadow}`,
            }}
          >
            <Story id={storyId} />
          </Box>
        </Box>
      )}
    </StoryBlockContainer>
  );
};
