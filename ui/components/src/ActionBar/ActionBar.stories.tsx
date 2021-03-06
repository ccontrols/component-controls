import React, { FC } from 'react';
import { Box } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { ActionBar, ActionBarProps } from './ActionBar';
import { ThemeProvider } from '../ThemeContext';
import { ExternalLink } from '../ExternalLink';

export default {
  title: 'Components/ActionBar',
  component: ActionBar,
  category: 'Navigation',
} as Document;

const Container: FC = ({ children }) => (
  <ThemeProvider>
    <Box
      style={{
        height: 100,
        width: '100%',
        backgroundColor: 'rgb(250, 248, 245)',
      }}
    >
      {children}
    </Box>
  </ThemeProvider>
);
export const overview: Example<ActionBarProps> = ({ themeKey }) => (
  <Container>
    <ActionBar
      themeKey={themeKey}
      actions={[
        {
          node: 'action 1',
          onClick: () => console.log('clicked'),
        },
        {
          node: <ExternalLink href="https://google.com">google</ExternalLink>,
          onClick: () => console.log('clicked'),
        },
      ]}
    />
  </Container>
);

overview.controls = {
  themeKey: {
    type: ControlTypes.OPTIONS,
    options: ['actionbar', 'toolbar', 'footer'],
    value: 'actionbar',
  },
};

export const link: Example = () => (
  <Container>
    <ActionBar
      actions={[
        {
          node: <ExternalLink href="https://google.com">google</ExternalLink>,
        },
      ]}
    />
  </Container>
);

export const order: Example = () => (
  <Container>
    <ActionBar
      actions={[
        {
          node: 'action 1',
          onClick: () => console.log('clicked'),
          order: 1,
        },
        {
          node: <ExternalLink href="https://google.com">google</ExternalLink>,
          onClick: () => console.log('clicked'),
          order: 0,
        },
      ]}
    />
  </Container>
);

export const override: Example = () => (
  <Container>
    <ActionBar
      actions={[
        {
          node: 'action 1',
          onClick: () => console.log('clicked'),
          id: 'copy',
        },
        {
          node: <ExternalLink href="https://google.com">google</ExternalLink>,
          onClick: () => console.log('clicked'),
        },
        {
          node: 'Copy',
          id: 'copy',
        },
      ]}
    />
  </Container>
);

export const groupEnd: Example = () => (
  <Container>
    <ActionBar
      actions={[
        {
          node: 'item 1',
        },
        {
          node: 'item 2',
          group: '1',
        },
        {
          node: 'item 3',
          group: '1',
        },
      ]}
    />
  </Container>
);

export const groupStart: Example = () => (
  <Container>
    <ActionBar
      actions={[
        {
          node: 'item 1',
          group: '1',
        },
        {
          node: 'item 2',
          group: '1',
        },
        {
          node: 'item 3',
        },
      ]}
    />
  </Container>
);
