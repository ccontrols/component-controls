import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import { ButtonEditor } from './ButtonEditor';

export default {
  title: 'Editors/ButtonEditor',
  component: ButtonEditor,
};

export const overview = () => (
  <ButtonEditor
    name="Check in console"
    onClick={() => console.log('clicked')}
    onChange={() => {}}
    prop={{ type: ControlTypes.BUTTON }}
  />
);
