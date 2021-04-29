/** @jsx jsx */
import { FC, ChangeEvent } from 'react';
import { jsx, Box, Label, LabelProps } from 'theme-ui';
import { ComponentControlOptions } from '@component-controls/core';
import { useControl } from '@component-controls/store';
import { normalizeOptions, NormalizedOption } from './utils';
import { PropertyEditor } from '../types';

const CheckboxesWrapper: FC<{ isInline: boolean }> = ({ isInline, ...rest }) =>
  isInline ? (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '> * + *': {
          marginLeft: 10,
        },
      }}
      {...rest}
    />
  ) : (
    <Box {...rest} />
  );

const CheckboxFieldset: FC = props => (
  <Box
    as="fieldset"
    sx={{
      border: 0,
      padding: 0,
      margin: 0,
    }}
    {...props}
  />
);

const CheckboxLabel: FC<LabelProps> = props => (
  <Label
    sx={{
      width: 'unset',
      padding: '3px 0 3px 5px',
      lineHeight: '18px',
      display: 'inline-block',
    }}
    {...props}
  />
);

export const CheckboxEditor: PropertyEditor = ({ name, ...rest }) => {
  const [control, onChange] = useControl<ComponentControlOptions>(name);

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
          {...rest}
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
