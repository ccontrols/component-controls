import React from 'react';
import { Example } from '@component-controls/core';
import { Description } from '.';

export default {
  title: 'Components/Description',
  component: Description,
};

export const overview: Example = () => (
  <Description>Some **description** markdown</Description>
);
