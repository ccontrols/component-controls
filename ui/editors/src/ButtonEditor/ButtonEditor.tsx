import React from 'react';
import { ComponentControlButton } from '@component-controls/specification';
import { Button } from 'theme-ui';
import {
  PropertyControlProps,
  PropertyEditor,
  PropertyOnClick,
} from '../types';

export interface ButtonEditorProps extends PropertyControlProps {
  /**
   * the button property that is being edited.
   */
  prop: ComponentControlButton;
  /**
   * the onClick event handler for the button
   */

  onClick: PropertyOnClick;
}

/**
 * Button control editor.
 */
export const ButtonEditor: PropertyEditor<ButtonEditorProps> = ({
  prop,
  name,
  onClick,
}) => (
  <Button name={name} onClick={() => onClick(prop)}>
    {name}
  </Button>
);
