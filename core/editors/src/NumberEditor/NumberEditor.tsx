import React, { ChangeEvent } from 'react';
import { styled } from '@storybook/theming';
import { ComponentControlNumber } from '@component-controls/specification';
import { Form } from '@storybook/components';
import { PropertyControlProps, PropertyEditor } from '../types';

export interface NumberEditorProps extends PropertyControlProps {
  prop: ComponentControlNumber;
}

const RangeInput = styled.input(
  {
    boxSizing: 'border-box',
    height: 25,
    outline: 'none',
    border: '1px solid #f7f4f4',
    borderRadius: 2,
    fontSize: 11,
    padding: 5,
    color: '#444',
  },
  {
    display: 'table-cell',
    flexGrow: 1,
  },
);

const RangeLabel = styled.span({
  paddingLeft: 5,
  paddingRight: 5,
  fontSize: 12,
  whiteSpace: 'nowrap',
});

const RangeWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const NumberEditor: PropertyEditor<NumberEditorProps> = ({
  prop,
  name,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    let parsedValue: number | null = Number(value);

    if (Number.isNaN(parsedValue) || value === '') {
      parsedValue = null;
    }

    onChange(name, parsedValue);
  };

  return prop.range ? (
    <RangeWrapper>
      <RangeLabel>{prop.min}</RangeLabel>
      <RangeInput
        value={prop.value}
        type="range"
        name={name}
        min={prop.min}
        max={prop.max}
        step={prop.step}
        onChange={handleChange}
      />
      <RangeLabel>{`${prop.value} / ${prop.max}`}</RangeLabel>
    </RangeWrapper>
  ) : (
    <Form.Input
      value={prop.value}
      type="number"
      name={name}
      min={prop.min}
      max={prop.max}
      step={prop.step}
      onChange={handleChange}
      size="flex"
    />
  );
};
