import React from 'react';
import { Donut } from 'theme-ui';
import { ExternalLink } from '../ExternalLink';
import { ActionContainer } from './ActionContainer';

export default {
  title: 'Components/ActionContainer',
  component: ActionContainer,
};

export const overview = () => {
  return (
    <ActionContainer
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
    >
      <Donut value={1 / 2} />
    </ActionContainer>
  );
};

export const order = () => (
  <ActionContainer
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
  >
    <Donut value={1 / 2} />
  </ActionContainer>
);

export const override = () => (
  <ActionContainer
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
        //this will override the action above
        title: 'Copy',
        id: 'copy',
      },
    ]}
  >
    <Donut value={1 / 2} />
  </ActionContainer>
);
