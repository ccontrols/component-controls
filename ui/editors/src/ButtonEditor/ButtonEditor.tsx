import React from 'react';
import { Button } from 'theme-ui';
import { ComponentControlButton, ControlTypes } from '@component-controls/core';
import { PropertyEditor } from '../types';
import { useControl } from '../state';
import { addPropertyEditor } from '../prop-factory';

/**
 * Button control editor.
 */
export const ButtonEditor: PropertyEditor = ({ name, selector }) => {
  const [control] = useControl<ComponentControlButton>(name, selector);
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
