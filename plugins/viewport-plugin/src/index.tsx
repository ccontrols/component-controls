/** @jsx jsx */
import { FC, useState } from 'react';
import { Box, Theme, jsx } from 'theme-ui';
import {
  StoryBlockContainer,
  Story,
  StoryBlockContainerProps,
} from '@component-controls/blocks';

import { ActionContainer } from '@component-controls/components';

export const ViewportBlock: FC<StoryBlockContainerProps> = props => {
  const [showXSmall, setShowXSmall] = useState(true);
  const [showSmall, setShowSmall] = useState(true);
  const [showMed, setShowMed] = useState(true);
  return (
    <StoryBlockContainer {...props}>
      {({ story: { id: storyId } = {} }) => (
        <ActionContainer
          actions={[
            { node: 'medium', onClick: () => setShowMed(!showMed) },
            { node: 'small', onClick: () => setShowSmall(!showSmall) },
            { node: 'xtra-small', onClick: () => setShowXSmall(!showXSmall) },
          ]}
          plain={true}
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
              hidden={!showXSmall}
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
              hidden={!showSmall}
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
              hidden={!showMed}
            >
              <Story id={storyId} />
            </Box>
          </Box>
        </ActionContainer>
      )}
    </StoryBlockContainer>
  );
};
