import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ColorEditor } from './ColorEditor';

export default {
  title: 'Controls/Editors/ColorEditor',
  component: ColorEditor,
};

export const sample = () => {
  const [state, setState] = React.useState('#dedede');
  return (
    <ColorEditor
      name="prop"
      onChange={(name, newVal) => setState(newVal)}
      prop={{ type: ControlTypes.COLOR, value: state }}
    />
  );
};

export const rgb = () => {
  const [state, setState] = React.useState('rgb(192,0,0)');
  return (
    <ColorEditor
      name="prop"
      onChange={(name, newVal) => setState(newVal)}
      prop={{ type: ControlTypes.COLOR, value: state }}
    />
  );
};
