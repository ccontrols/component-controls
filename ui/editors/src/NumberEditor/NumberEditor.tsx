import React, { FC, ChangeEvent } from 'react';
import { Input, Box, BoxProps } from 'theme-ui';
import { ComponentControlNumber } from '@component-controls/specification';
import { PropertyEditor } from '../types';
import { useControlContext } from '../context';

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

/**
 * Number control editor.
 */
export const NumberEditor: PropertyEditor = ({ name }) => {
  const { control, onChange } = useControlContext<ComponentControlNumber>({
    name,
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    let parsedValue: number | null = Number(value);

    if (Number.isNaN(parsedValue) || value === '') {
      parsedValue = null;
    }

    onChange(name, parsedValue);
  };

  return control.range ? (
    <RangeWrapper>
      <RangeLabel>{control.min}</RangeLabel>
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
        value={control.value}
        type="range"
        name={name}
        min={control.min}
        max={control.max}
        step={control.step}
        onChange={handleChange}
      />
      <RangeLabel>{`${control.value} / ${control.max}`}</RangeLabel>
    </RangeWrapper>
  ) : (
    <Input
      value={control.value}
      type="number"
      name={name}
      min={control.min}
      max={control.max}
      step={control.step}
      onChange={handleChange}
    />
  );
};
