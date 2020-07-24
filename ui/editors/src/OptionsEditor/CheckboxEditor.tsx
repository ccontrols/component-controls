import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { ComponentControlOptions } from '@component-controls/core';
import { normalizeOptions, NormalizedOption } from './utils';
import { PropertyEditor } from '../types';
import { useControl } from '../state';

const CheckboxesWrapper = styled.div<{ isInline: boolean }>(({ isInline }) =>
  isInline
    ? {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '> * + *': {
          marginLeft: 10,
        },
      }
    : {},
);

const CheckboxFieldset = styled.fieldset({
  border: 0,
  padding: 0,
  margin: 0,
});

const CheckboxLabel = styled.label({
  padding: '3px 0 3px 5px',
  lineHeight: '18px',
  display: 'inline-block',
});

export const CheckboxEditor: PropertyEditor = ({ name, selector }) => {
  const [control, onChange] = useControl<ComponentControlOptions>(
    name,
    selector,
  );

  const { options, value } = control;
  const { entries, selected } = normalizeOptions(options, value);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = (e.target as HTMLInputElement).value;
    const values = entries
      .filter(entry => {
        const entryValue =
          typeof entry.value.toString === 'function'
            ? entry.value.toString()
            : entry.value;
        return selected.includes(entry.value)
          ? currentValue !== entryValue
          : currentValue === entryValue;
      })
      .map(entry => entry.value);
    onChange(values);
  };

  const renderCheckboxList = () => {
    return entries.map(entry => renderCheckbox(entry));
  };

  const renderCheckbox = (entry: NormalizedOption) => {
    const id = `${entry.label}-${entry.value}`;
    return (
      <div key={id}>
        <input
          type="checkbox"
          id={id}
          name={entry.label}
          value={entry.value}
          onChange={handleChange}
          checked={selected.includes(entry.value)}
        />
        <CheckboxLabel htmlFor={id}>{entry.label}</CheckboxLabel>
      </div>
    );
  };
  const isInline = control.display === 'inline-check';
  return (
    <CheckboxFieldset>
      <CheckboxesWrapper isInline={isInline}>
        {renderCheckboxList()}
      </CheckboxesWrapper>
    </CheckboxFieldset>
  );
};
