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
        backgroundColor: 'rgb(250, 248, 245)',
      }}
    >
      {children}
    </Box>
  </ThemeProvider>
);
export const overview = () => (
  <Container>
    <ActionBar
      actions={[
        {
          title: 'action 1',
          onClick: () => console.log('clicked'),
        },
        {
          title: <ExternalLink href="https://google.com">google</ExternalLink>,
          onClick: () => console.log('clicked'),
        },
      ]}
    />
  </Container>
);

export const link = () => (
  <Container>
    <ActionBar
      actions={[
        {
          title: <ExternalLink href="https://google.com">google</ExternalLink>,
        },
      ]}
    />
  </Container>
);

export const order = () => (
  <Container>
    <ActionBar
      actions={[
        {
          title: 'action 1',
          onClick: () => console.log('clicked'),
          order: 1,
        },
        {
          title: <ExternalLink href="https://google.com">google</ExternalLink>,
          onClick: () => console.log('clicked'),
          order: 0,
        },
      ]}
    />
  </Container>
);

export const override = () => (
  <Container>
    <ActionBar
      actions={[
        {
          title: 'action 1',
          onClick: () => console.log('clicked'),
          id: 'copy',
        },
        {
          title: <ExternalLink href="https://google.com">google</ExternalLink>,
          onClick: () => console.log('clicked'),
        },
        {
          title: 'Copy',
          id: 'copy',
        },
      ]}
    />
  </Container>
);

export const groupEnd = () => (
  <Container>
    <ActionBar
      actions={[
        {
          title: 'item 1',
        },
        {
          title: 'item 2',
          group: '1',
        },
        {
          title: 'item 3',
          group: '1',
        },
      ]}
    />
  </Container>
);

export const groupStart = () => (
  <Container>
    <ActionBar
      actions={[
        {
          title: 'item 1',
          group: '1',
        },
        {
          title: 'item 2',
          group: '1',
        },
        {
          title: 'item 3',
        },
      ]}
    />
  </Container>
);
