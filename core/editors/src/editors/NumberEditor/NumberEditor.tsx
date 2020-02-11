import React, { FC, ChangeEvent } from 'react';
import { ComponentControlNumber } from '@component-controls/specification';
import { Input, Box, BoxProps } from 'theme-ui';
import { PropertyControlProps, PropertyEditor } from '../types';

export interface NumberEditorProps extends PropertyControlProps {
  prop: ComponentControlNumber;
}

const RangeLabel: FC<BoxProps> = props => (
  <Box
    as="span"
    css={{
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12,
      whiteSpace: 'nowrap',
    }}
    {...props}
  />
);

const RangeWrapper: FC<BoxProps> = props => (
  <Box
    as="div"
    css={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    }}
    {...props}
  />
);

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
      <Input
        css={{
          boxSizing: 'border-box',
          height: 25,
          outline: 'none',
          border: '1px solid #f7f4f4',
          borderRadius: 2,
          fontSize: 11,
          padding: 5,
          color: '#444',
          display: 'table-cell',
          flexGrow: 1,
        }}
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
    <Input
      value={prop.value}
      type="number"
      name={name}
      min={prop.min}
      max={prop.max}
      step={prop.step}
      onChange={handleChange}
    />
  );
};
