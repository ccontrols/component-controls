/** @jsx jsx */
import { FC } from 'react';
import { Box, Theme, jsx } from 'theme-ui';
import {
  StoryBlockContainer,
  Story,
  StoryBlockContainerProps,
} from '@component-controls/blocks';

import { ActionContainer } from '@component-controls/components';

export const ViewportBlock: FC<StoryBlockContainerProps> = props => {
  return (
    <StoryBlockContainer {...props}>
      {({ story: { id: storyId } = {} }) => (
        <ActionContainer
          actions={[{ node: 'actions', onClick: () => alert('actions') }]}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              minHeight: '250px',
              height: 'fit-content',
              width: '100%',
              overflow: 'auto',
              p: 1,
              boxShadow: (t: Theme) => `0px 2px 6px 0px ${t.colors?.shadow}`,
            }}
          >
            <Box
              sx={{
                minWidth: '250px',
                height: 'fit-content',
                m: 1,
                boxShadow: (t: Theme) => `0px 2px 6px 0px ${t.colors?.shadow}`,
              }}
            >
              <Story id={storyId} />
            </Box>
            <Box
              sx={{
                minWidth: '500px',
                height: 'fit-content',
                m: 1,
                boxShadow: (t: Theme) => `0px 2px 6px 0px ${t.colors?.shadow}`,
              }}
            >
              <Story id={storyId} />
            </Box>
            <Box
              sx={{
                minWidth: '900px',
                height: 'fit-content',
                m: 1,
                boxShadow: (t: Theme) => `0px 2px 6px 0px ${t.colors?.shadow}`,
              }}
            >
              <Story id={storyId} />
            </Box>
          </Box>
        </ActionContainer>
      )}
    </StoryBlockContainer>
  );
};
