import React from 'react';
import { Button } from 'theme-ui';
import { ControlTypes } from '../controls';
import { ObjectControl } from './components/ObjectControl';

export default {
  title: 'Controls/Object',
  component: ObjectControl,
};

export const overview = ({ text, background: { color } }) => {
  return <Button css={{ backgroundColor: color }}>{text}</Button>;
};

overview.controls = {
  text: { type: ControlTypes.TEXT, value: 'Button' },
  background: {
    type: ControlTypes.OBJECT,
    value: {
      color: { type: ControlTypes.COLOR, value: 'red' },
    },
  },
};

export const objectNested = ({
  text,
  style: {
    padding,
    background: { color },
  },
}) => {
  return (
    <Button css={{ backgroundColor: color, padding: padding }}>{text}</Button>
  );
};

objectNested.controls = {
  text: { type: ControlTypes.TEXT, value: 'Button' },
  style: {
    type: ControlTypes.OBJECT,
    value: {
      padding: { type: ControlTypes.NUMBER, value: 5 },
      background: {
        type: ControlTypes.OBJECT,
        value: {
          color: { type: ControlTypes.COLOR, value: 'red' },
        },
      },
    },
  },
};

export const editLabel = ({ background: { color } }) => {
  return <Button css={{ backgroundColor: color }}>custom label</Button>;
};

editLabel.controls = {
  background: {
    type: ControlTypes.OBJECT,
    editLabel: 'click to edit object',
    value: {
      color: { type: ControlTypes.COLOR, value: 'red' },
    },
  },
};
