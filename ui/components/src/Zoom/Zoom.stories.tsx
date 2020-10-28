import React from 'react';
import { Example } from '@component-controls/core';
import { Zoom } from './Zoom';
import { Donut } from 'theme-ui';
import { ActionContainer } from '../ActionContainer';

export default {
  title: 'Components/Zoom',
  component: Zoom,
};

export const overview: Example = () => {
  const [scale, setScale] = React.useState(1);
  return (
    <ActionContainer
      actions={[
        {
          node: 'reset',
          onClick: () => setScale(1),
        },
        {
          node: 'zoom out',
          onClick: () => setScale(scale / 2),
        },
        {
          node: 'zoom in',
          onClick: () => setScale(scale * 2),
        },
      ]}
    >
      <Zoom scale={scale}>
        <Donut value={1 / 2} />
      </Zoom>
    </ActionContainer>
  );
};
