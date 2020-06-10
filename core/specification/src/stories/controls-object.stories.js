import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { Button } from 'theme-ui';
import { ObjectControl } from './components/ObjectControl';

export default {
  title: 'Controls/OBJECT',
  component: ObjectControl,
};

export const overview = ({ text, background: { color } }) => {
  return <Button css={{ backgroundColor: color }}>{text}</Button>;
};

overview.story = {
  controls: {
    text: { type: ControlTypes.TEXT, value: 'Button' },
    background: {
      type: ControlTypes.OBJECT,
      value: {
        color: { type: ControlTypes.COLOR, value: 'red' },
      },
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

objectNested.story = {
  controls: {
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
  },
};

export const editLabel = ({ background: { color } }) => {
  return <Button css={{ backgroundColor: color }}>custom label</Button>;
};

editLabel.story = {
  controls: {
    background: {
      type: ControlTypes.OBJECT,
      editLabel: 'click to edit object',
      value: {
        color: { type: ControlTypes.COLOR, value: 'red' },
      },
    },
  },
};
