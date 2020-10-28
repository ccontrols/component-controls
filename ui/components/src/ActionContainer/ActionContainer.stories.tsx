import React from 'react';
import { Donut } from 'theme-ui';
import { Example } from '@component-controls/core';
import { ExternalLink } from '../ExternalLink';
import { ActionContainer } from './ActionContainer';

export default {
  title: 'Components/ActionContainer',
  component: ActionContainer,
};

export const overview: Example = () => {
  return (
    <ActionContainer
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
    >
      <Donut value={1 / 2} />
    </ActionContainer>
  );
};

export const order: Example = () => (
  <ActionContainer
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
  >
    <Donut value={1 / 2} />
  </ActionContainer>
);

export const override: Example = () => (
  <ActionContainer
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
        //this will override the action above
        node: 'Copy',
        id: 'copy',
      },
    ]}
  >
    <Donut value={1 / 2} />
  </ActionContainer>
);
