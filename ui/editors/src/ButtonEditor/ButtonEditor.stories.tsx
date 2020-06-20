import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { ConrolsContextProvider } from '../context';
import { ButtonEditor } from './ButtonEditor';

export default {
  title: 'Editors/ButtonEditor',
  component: ButtonEditor,
};

export const overview = () => (
  <ConrolsContextProvider
    onClick={() => console.log('clicked')}
    onChange={() => {}}
    controls={{
      prop: { type: ControlTypes.BUTTON },
    }}
  >
    <ButtonEditor name="Check in console" />
  </ConrolsContextProvider>
);
