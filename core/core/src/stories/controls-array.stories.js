import React from 'react';
import { ControlTypes } from '../controls';
import { ArrayControl } from './components/ArrayControl';

export default {
  title: 'Controls/Array',
  component: ArrayControl,
};

export const overview = ({ text, buttons }) => (
  <div>
    {text}
    {buttons.map(({ label, color }, index) => (
      <div key={`button_${index}`}>
        <button style={{ color }}>{label}</button>
      </div>
    ))}
  </div>
);

overview.controls = {
  text: { type: ControlTypes.TEXT, value: 'Button' },
  buttons: {
    type: ControlTypes.ARRAY,
    value: [
      { label: 'Button 1', color: 'red' },
      { label: 'Button 2', color: 'grey' },
    ],
    rowType: {
      label: { type: ControlTypes.TEXT },
      color: { type: ControlTypes.COLOR },
    },
  },
};

export const arrayNested = ({ text, buttons }) => (
  <div>
    {text}
    {buttons.map(({ label, style }, index) => (
      <div key={`button_${index}`}>
        <button style={style}>{label}</button>
      </div>
    ))}
  </div>
);

arrayNested.controls = {
  text: { type: ControlTypes.TEXT, value: 'Button' },
  buttons: {
    type: ControlTypes.ARRAY,
    value: [
      {
        label: 'Button 1',
        style: {
          backgroundColor: 'white',
          color: 'red',
          padding: 0,
        },
      },
      {
        label: 'Button 2',
        style: {
          backgroundColor: 'black',
          color: 'white',
          padding: 15,
        },
      },
    ],
    rowType: {
      label: { type: ControlTypes.TEXT },
      style: {
        type: ControlTypes.OBJECT,
        value: {
          color: { type: ControlTypes.COLOR },
          backgroundColor: { type: ControlTypes.COLOR },
          padding: { type: ControlTypes.NUMBER },
        },
      },
    },
  },
};
