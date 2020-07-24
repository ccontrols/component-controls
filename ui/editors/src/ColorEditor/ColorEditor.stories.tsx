import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { useControlSelector } from '../state';
import { ColorEditor } from './ColorEditor';

export default {
  title: 'Editors/ColorEditor',
  component: ColorEditor,
};

export const overview = () => {
  const [state, setState] = React.useState('#dedede');
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.COLOR, value: state },
    },
    (name, newVal) => setState(newVal),
  );

  return <ColorEditor name="prop" selector={selector} />;
};

export const rgb = () => {
  const [state, setState] = React.useState('rgb(192,0,0)');
  const selector = useControlSelector(
    {
      prop: { type: ControlTypes.COLOR, value: state },
    },
    (name, newVal) => setState(newVal),
  );
  return <ColorEditor name="prop" selector={selector} />;
};
