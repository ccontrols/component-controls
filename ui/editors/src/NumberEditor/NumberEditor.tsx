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
export const NumberEditor: PropertyEditor = ({ name }) => {
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

  return (
    <Keyboard keys={[DOWN_ARROW, UP_ARROW]} onKeyDown={onKeyPressed}>
      {control.range ? (
        <RangeWrapper>
          <RangeLabel>{control.min}</RangeLabel>
          <Slider
            value={control.value}
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
      )}
    </Keyboard>
  );
};

addPropertyEditor(ControlTypes.NUMBER, NumberEditor);
