import React from 'react';
import { ComponentControlButton } from '@component-controls/specification';
import { Button } from 'theme-ui';
import {
  PropertyControlProps,
  PropertyEditor,
  PropertyOnClick,
} from '../../types';

export interface ButtonEditorProps extends PropertyControlProps {
  prop: ComponentControlButton;
  onClick: PropertyOnClick;
}

export const ButtonEditor: PropertyEditor<ButtonEditorProps> = ({
  prop,
  name,
  onClick,
}) => (
  <Button name={name} onClick={() => onClick(prop)}>
    {name}
  </Button>
);
