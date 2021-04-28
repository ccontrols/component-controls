import React, { FC, ChangeEvent } from 'react';
import { Input, Box, BoxProps, Slider } from 'theme-ui';
import { Keyboard, DOWN_ARROW, UP_ARROW } from '@component-controls/components';
import { ComponentControlNumber, ControlTypes } from '@component-controls/core';
import { useControl } from '@component-controls/store';
import { PropertyEditor } from '../types';
import { addPropertyEditor } from '../prop-factory';

const RangeLabel: FC<BoxProps> = props => (
  <Box as="span" variant="forms.slider.label" {...props} />
);

const RangeWrapper: FC<BoxProps> = props => (
  <Box as="div" variant="forms.slider.wrapper" {...props} />
);

/**
 * Number control editor.
 */
export const NumberEditor: PropertyEditor = ({ name, ...rest }) => {
  const [control, onChange] = useControl<ComponentControlNumber>(name);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    let parsedValue: number | null = Number(value);

    if (Number.isNaN(parsedValue) || value === '') {
      parsedValue = null;
    }

    onChange(parsedValue);
  };

  const onKeyPressed = (key: number) => {
    switch (key) {
      case UP_ARROW:
        if (typeof control.value === 'number') {
          onChange(
            Math.min(
              control.max || Number.MAX_VALUE,
              control.value + (control.step || 1),
            ),
          );
        }
        break;
      case DOWN_ARROW:
      default:
        if (typeof control.value === 'number') {
          onChange(
            Math.max(control.min || 0, control.value - (control.step || 1)),
          );
        }
        break;
    }
  };
  const hint = `a numeric value${
    typeof control.min != 'undefined' && typeof control.max !== 'undefined'
      ? ` between ${control.min} and ${control.max}`
      : ''
  }`;

  return (
    <Keyboard keys={[DOWN_ARROW, UP_ARROW]} onKeyDown={onKeyPressed}>
      {control.range ? (
        <RangeWrapper>
          <RangeLabel aria-labelledby="">{control.min}</RangeLabel>
          <Slider
            value={control.value}
            name={name}
            min={control.min}
            max={control.max}
            step={control.step}
            onChange={handleChange}
            aria-label={`select ${hint}`}
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
          aria-label={`enter ${hint}`}
          {...rest}
        />
      )}
    </Keyboard>
  );
};

addPropertyEditor(ControlTypes.NUMBER, NumberEditor);
