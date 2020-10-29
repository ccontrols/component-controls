import React from 'react';
import { ControlTypes, Example } from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { ButtonEditor } from './ButtonEditor';

export default {
  title: 'Editors/ButtonEditor',
  component: ButtonEditor,
};

export const overview: Example = () => (
  <ControlsStateProvider
    onChange={() => console.log('clicked')}
    controls={{
      prop: { type: ControlTypes.BUTTON },
    }}
  >
    <ButtonEditor name="Check in console" />
  </ControlsStateProvider>
);
