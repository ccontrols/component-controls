import React from 'react';
import { Donut } from 'theme-ui';
import { BlockContainer, BlockContainerProps } from './BlockContainer';

export default {
  title: 'Blocks/Components/BlockContainer',
  component: BlockContainer,
};

export const simple = ({ title }: BlockContainerProps) => {
  return (
    <BlockContainer
      title={title}
      actions={[{ title: 'click me', onClick: () => console.log('clicked') }]}
    >
      <Donut value={1 / 2} />
    </BlockContainer>
  );
};

simple.story = {
  parameters: {
    controls: {
      title: { type: 'text', value: 'Block title' },
    },
  },
};
