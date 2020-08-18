import React from 'react';
import { Button } from 'theme-ui';
import { ComponentControlButton, ControlTypes } from '@component-controls/core';
import { useControl } from '@component-controls/store';
import { PropertyEditor } from '../types';
import { addPropertyEditor } from '../prop-factory';

/**
 * Button control editor.
 */
export const ButtonEditor: PropertyEditor = ({ name }) => {
  const [control] = useControl<ComponentControlButton>(name);
  return (
    <Button
      name={name}
      onClick={() => (control.onClick ? control.onClick(control) : {})}
    >
      {name}
    </Button>
  );
};

addPropertyEditor(ControlTypes.BUTTON, ButtonEditor);
