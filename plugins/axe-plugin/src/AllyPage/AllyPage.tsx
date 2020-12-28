import React, { FC } from 'react';
import { TabConfiguration } from '@component-controls/core';
import { Description } from '@component-controls/blocks';
import { AllyBlock } from '../AllyBlock';

const AllyPage: FC = () => {
  return (
    <>
      <Description />
      <AllyBlock title="A11y tests" />
    </>
  );
};
export default {
  title: 'Ally',
  component: AllyPage,
} as TabConfiguration;
