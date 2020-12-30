import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { ProgressIndicator, ProgressIndicatorProps } from './ProgressIndicator';

export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
} as Document;

export const overview: Example<ProgressIndicatorProps> = ({
  max,
  value,
  color,
}) => {
  return <ProgressIndicator max={max} value={value} color={color} />;
};

overview.controls = {
  max: 10,
  value: 3,
  color: { type: ControlTypes.COLOR, value: 'red' },
};
