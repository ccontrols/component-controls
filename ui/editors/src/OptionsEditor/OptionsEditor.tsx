import React from 'react';
import ReactSelect from 'react-select';
import styled from '@emotion/styled';
import { ComponentControlOptions } from '@component-controls/specification';
import { normalizeOptions } from './utils';
import { PropertyEditor } from '../types';
import { useControlContext } from '../context';
import { RadiosEditor } from './RadiosEditor';
import { CheckboxEditor } from './CheckboxEditor';

const OptionsSelect = styled(ReactSelect)({
  color: 'black',
  flexBasis: '100%',
});

type ReactSelectOnChangeFn =
  | { (v: OptionsSelectValueItem): void }
  | { (v: OptionsSelectValueItem[]): void };

interface OptionsSelectValueItem {
  value: any;
  label: string;
}

/**
 * Options control editor.
 */

export const OptionsEditor: PropertyEditor = ({ name, ...rest }) => {
  const { control, onChange } = useControlContext<ComponentControlOptions>({
    name,
  });
  const { display, options, value } = control;

  if (display === 'check' || display === 'inline-check') {
    return <CheckboxEditor name={name} {...rest} />;
  }

  if (display === 'radio' || display === 'inline-radio') {
    return <RadiosEditor name={name} {...rest} />;
  }

  if (
    display === undefined ||
    display === 'select' ||
    display === 'multi-select'
  ) {
    const { entries, selected } = normalizeOptions(options, value);
    const isMulti = display === 'multi-select';
    let handleChange: ReactSelectOnChangeFn = (e: OptionsSelectValueItem) =>
      onChange(name, e.value);

    if (isMulti) {
      handleChange = (values: OptionsSelectValueItem[]) =>
        onChange(
          name,
          values.map(item => item.value),
        );
    }
    const selectValue = entries.filter(op => selected.includes(op.value));
    return (
      <OptionsSelect
        value={selectValue}
        options={entries}
        isMulti={isMulti}
        onChange={handleChange}
      />
    );
  }

  return null;
};
