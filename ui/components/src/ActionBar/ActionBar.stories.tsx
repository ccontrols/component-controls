import React from 'react';
import { Box } from 'theme-ui';
import { ActionBar } from './ActionBar';
import { ThemeProvider } from '../ThemeContext';
import { ExternalLink } from '../ExternalLink';

export default {
  title: 'Components/ActionBar',
  component: ActionBar,
};

const Container: React.FC = ({ children }) => (
  <ThemeProvider>
    <Box
      style={{
        height: 100,
        backgroundColor: 'red',
      }}
    >
      {children}
    </Box>
  </ThemeProvider>
);
export const simple = () => (
  <Container>
    <ActionBar
      actionItems={[
        {
          title: 'action 1',
          onClick: () => console.log('clicked'),
        },
        {
          title: 'action 2',
          onClick: () => console.log('clicked'),
        },
      ]}
    />
  </Container>
);

export const disabled = () => (
  <Container>
    <ActionBar
      actionItems={[
        {
          title: 'click action',
          onClick: () => console.log('clicked'),
          disabled: true,
        },
      ]}
    />
  </Container>
);

export const link = () => (
  <Container>
    <ActionBar
      actionItems={[
        {
          title: <ExternalLink href="https://google.com">google</ExternalLink>,
        },
      ]}
    />
  </Container>
);
