import React from 'react';
import { Donut } from 'theme-ui';
import { HoverBox } from '.';

export default {
  title: 'Components/HoverBox',
  component: HoverBox,
};

export const overview = () => (
  <HoverBox label="donut component">
    <Donut value={1 / 2} />,
  </HoverBox>
);
