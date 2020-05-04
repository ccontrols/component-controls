import React from 'react';
import { Button } from 'theme-ui';
import { ComponentControlButton } from '@component-controls/specification';
import { PropertyEditor } from '../types';
import { useControlContext } from '../context';

/**
 * Button control editor.
 */
export const ButtonEditor: PropertyEditor = ({ name }) => {
  const { control, onClick } = useControlContext<ComponentControlButton>({
    name,
  });
  return (
    <Button name={name} onClick={() => (onClick ? onClick(control) : {})}>
      {name}
    </Button>
  );
};
