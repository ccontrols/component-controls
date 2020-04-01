import React from 'react';
import { Zoom } from './Zoom';
import { Donut } from 'theme-ui';
import { ActionContainer } from '../ActionContainer';

export default {
  title: 'Components/Zoom',
  component: Zoom,
};

export const overview = () => {
  const [scale, setScale] = React.useState(1);
  return (
    <ActionContainer
      actions={[
        {
          title: 'reset',
          onClick: () => setScale(1),
        },
        {
          title: 'zoom out',
          onClick: () => setScale(scale / 2),
        },
        {
          title: 'zoom in',
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
