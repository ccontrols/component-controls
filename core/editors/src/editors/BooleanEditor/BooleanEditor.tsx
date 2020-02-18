import React from 'react';
import { ComponentControlBoolean } from '@component-controls/specification';
import { Toggle } from '../../components/Toggle/Toggle';
import { FlexContainer } from '../../components/FlexContainer/FlexContainer';
import { PropertyControlProps, PropertyEditor } from '../types';

export interface BooleanEditorProps extends PropertyControlProps {
  prop: ComponentControlBoolean;
}

export const BooleanEditor: PropertyEditor<BooleanEditorProps> = ({
  prop,
  name,
  onChange,
}) => (
  <FlexContainer>
    <Toggle
      id={name}
      onChange={checked => onChange(name, checked)}
      checked={prop.value}
    />
  </FlexContainer>
);
