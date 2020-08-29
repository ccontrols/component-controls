import React, { FC } from 'react';
import { Description } from '@component-controls/blocks';
import { AllyBlock } from '../AllyBlock';

export const AllyPage: FC = () => {
  return (
    <>
      <Description />
      <AllyBlock title="A11y tests" />
    </>
  );
};
